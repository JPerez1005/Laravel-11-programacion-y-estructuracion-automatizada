import { hablar, preLoadVoices } from './speech.js';

// 3D Scroll
let zSpacing = -2200,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = [];

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1);

// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}

const copyButtonLabel = "Copy Code";

// Seleccionamos todos los bloques <pre>
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  if (navigator.clipboard) {
    let button = document.createElement("button");
    button.innerText = copyButtonLabel;
    block.appendChild(button);

    // Añadimos un evento de clic al botón
    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

// Función para copiar el código
async function copyCode(block, button) {
  // Buscamos el bloque <code> dentro del <pre>
  let code = block.querySelector("code");
  let text = code.innerText;

  // Si el bloque de código tiene un id llamado "nombre_tabla"
  if (code.id === "nombre_tabla") {
    // Preguntamos al usuario por el nombre de la tabla
    const tableName = prompt("Ingrese el nombre de la tabla:");
    if (tableName) {
      // Reemplazamos el texto "Nombre" con el nombre ingresado
      text = text.replace("Nombre", capitalizeFirstLetter(tableName));
    } else {
      // Si no se ingresa un nombre, detenemos la función
      alert("Debe ingresar un nombre para la tabla.");
      return;
    }
  }

  if (code.id === "campos_migracion") {
    await generateTypesOfFields();
    return;
  }

  // Si el bloque de código tiene un id llamado "modelo_tabla"
  if (code.id === "modelo_tabla") {
    await generateModel(); // Llamamos a la función para generar el modelo
    return; // Salimos de la función ya que el modelo ha sido generado
  }

  // Copiamos el texto al portapapeles
  await navigator.clipboard.writeText(text);

  // Retroalimentación visual
  button.innerText = "Code Copied";
  hablar("Código copiado correctamente.");

  // Restauramos el texto del botón después de 700ms
  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}


// Función para capitalizar la primera letra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Lista de restricciones posibles para el modelo
const restrictionsList = [
  "'nombre'=>'required|min:5|max:500'",
  "'stock'=>'required|integer|gt:0'",
  "'stock'=>'required|integer|lt:0'",
  "'fecha_de_prestamo'=>'required|date|before:fecha_de_devolucion'",
  "'fecha_de_devolucion'=>'required|date|after:fecha_de_prestamo'",
  "'autor_id'=>'required|integer'"
];

// Función para generar el modelo dinámico
async function generateModel() {
  let modelName = prompt("Ingrese el nombre del modelo:");
  if (!modelName) {
    alert("Debe ingresar un nombre de modelo.");
    return;
  }

  // Función para preguntar por las restricciones
  let restrictions = [];
  let addMoreRestrictions = true;

  while (addMoreRestrictions) {
    let restrictionIndex = prompt(
      `Seleccione una restricción para el modelo:\n1. ${restrictionsList[0]}\n2. ${restrictionsList[1]}\n3. ${restrictionsList[2]}\n4. ${restrictionsList[3]}\n5. ${restrictionsList[4]}\n6. ${restrictionsList[5]}\nIngrese el número de la opción que desea:`
    );
    
    if (restrictionIndex >= 1 && restrictionIndex <= 6) {
      restrictions.push(restrictionsList[restrictionIndex - 1]);
    } else {
      alert("Opción no válida. Intente nuevamente.");
    }

    addMoreRestrictions = confirm("¿Desea agregar otra restricción?");
  }

  // Preguntar si la tabla es padre, hija o ambas
  let tableType = prompt("¿El modelo es padre, hijo o ambos? Ingrese 'padre', 'hijo' o 'ambos':").toLowerCase();
  let relationships = "",tableName;
  if (tableType === "padre" || tableType === "ambos") {
    tableName=prompt("Ingrese el nombre de la tabla hija de este modelo:").toLocaleLowerCase();
    relationships += `
    public function ${tableName}() {
      return $this->hasMany(${capitalizeFirstLetter(tableName)}::class);
    }\n`;
  }

  if (tableType === "hijo" || tableType === "ambos") {
    tableName=prompt("Ingrese el nombre de la tabla padre de este modelo:").toLocaleLowerCase();
    relationships += `
    public function ${tableName}() {
      return $this->belongsTo(${capitalizeFirstLetter(tableName)}::class, ' ${tableName}_id');
    }\n`;
  }

  // Construir el modelo dinámico con las opciones elegidas
  let modelCode = `
  public $timestamps = true;

  protected $fillable = ['campo1', 'campo2']; // Ajustar según el usuario

  protected $table = '${modelName.toLowerCase()}';

  ${relationships}

  public static function validationRules() {
    return [
      ${restrictions.join(",\n      ")}
    ];
  }`;

  // Mostrar el modelo generado al usuario
  console.log(modelCode);
  await navigator.clipboard.writeText(modelCode); // Copia el código al portapapeles
  alert("Modelo generado y copiado al portapapeles.");
}

// Lista de tipos de campos posibles para la tabla (sin la clave foránea)
const fieldTypesList = [
  "$table->id();",
  "$table->string('nombre', 20);",
  "$table->integer('stock');",
  "$table->enum('rol', ['admin', 'regular'])->default('regular');",
  "$table->date('fecha');",
  "$table->boolean('estado')->default(false);",
  "$table->timestamps();"
];

// Función para generar tipos de campos de forma dinámica
async function generateTypesOfFields() {
  let fields = [];
  let addMoreFields = true;

  while (addMoreFields) {
    let fieldIndex = prompt(
      `Seleccione un tipo de campo para la tabla:\n1. ID\n2. String (nombre)\n3. Integer (stock)\n4. Enum (rol)\n5. Date (fecha)\n6. Boolean (estado)\n7. Foreign ID (foranea_id)\n8. Timestamps\nIngrese el número de la opción que desea:`
    );
    
    if (fieldIndex >= 1 && fieldIndex <= 7) {
      if (fieldIndex == 7) {
        // Preguntar por el nombre de la tabla foránea
        let foreignTableName = prompt("Ingrese el nombre de la tabla foránea:");
        fields.push(`$table->foreignId('${foreignTableName}_id')->constrained('${foreignTableName}')->onDelete('cascade');`);
      } else {
        fields.push(fieldTypesList[fieldIndex - 1]);
      }
    } else {
      alert("Opción no válida. Intente nuevamente.");
    }

    addMoreFields = confirm("¿Desea agregar otro campo?");
  }

  // Mostrar los campos generados
  let generatedFields = fields.join("\n");
  console.log(generatedFields);
  await navigator.clipboard.writeText(generatedFields); // Copiar al portapapeles
  alert("Campos generados y copiados al portapapeles.");
}