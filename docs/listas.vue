<template>
<tr v-for="item in data" :key="item.id">
    <td>{{ item.nombre }}</td>
    <td>{{ item.stock }}</td>
</tr>
                    
</template>
<script>

import { useListModel } from '../jsComponents/main.js';

export default {
  setup() {
    const { data,
        isLoading,
        pagination,
        fetchPagina,
        eliminar,
        search,
        buscar } = useListModel('el_nombre_de_la_tabla');
    return {
      data,
      isLoading,
      pagination,
      fetchPagina,
      eliminar,
      search,
      buscar,
    };
  },
};
</script>
<style lang="">
    
</style>