let voices = [];

let anila="Microsoft Anila Online (Natural) - Albanian (Albania)",
adri="Microsoft Adri Online (Natural) - Afrikaans (South Africa)",
ilir="Microsoft Ilir Online (Natural) - Albanian (Albania)",
natasha="Microsoft Natasha Online (Natural) - English (Australia)",
emily="Microsoft Emily Online (Natural) - English (Ireland)",
jean="Microsoft Jean Online (Natural) - French (Canada)",
elsa="Microsoft Elsa Online (Natural) - Italian (Italy)",
ximena="Microsoft Ximena Online (Natural) - Spanish (Colombia)",
salome="Microsoft Salome Online (Natural) - Spanish (Colombia)",
keita="Microsoft Keita Online (Natural) - Japanese (Japan)",
nanami="Microsoft Nanami Online (Natural) - Japanese (Japan)"
;

export function hablar(mensaje) {
    const speech = new SpeechSynthesisUtterance(mensaje);
    const sabinaVoice = voices.find(voice => voice.voiceURI === ximena
);
    if (sabinaVoice) {
        speech.voice = sabinaVoice;
        console.log('Using Sabina voice:', sabinaVoice);
    } else {
        // Use any available voice as a fallback
        speech.voice = voices[0] || null;
        console.warn('Sabina voice not found, using default or fallback voice.');
    }
    speech.rate = 1;
    speech.lang = 'es-MX';
    window.speechSynthesis.speak(speech);
}

export function preLoadVoices() {
    return new Promise((resolve) => {
        voices = window.speechSynthesis.getVoices();
        if (voices.length !== 0) {
            console.log('Voces cargadas inmediatamente:', voices);
            resolve(voices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                console.log('Voces cargadas después de onvoiceschanged:', voices);
                resolve(voices);
            };
        }
    });
}
