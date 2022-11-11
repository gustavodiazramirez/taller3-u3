<template>
  <div class="mx-auto" style="width: 120px;">
    <div class="card-header">
    <div v-for="producto in productos" :key="producto">
      <div class="card" style="width: 20rem">
        <img :src="producto.images[0]" class="card-img-top"  alt="" /> 
        <h6 class="card-text">{{ producto.name }}</h6>
        <h6 class="card-title">{{ producto.createdAt }}</h6>
        <button @click="goToProducto(producto._id)" class="btn btn-warning">Ir al producto</button>
    </div>
   </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      productos: []
    }
  },
  props:{
    id: String
  },
  mounted() {
    let vue = this;
    axios.get('//170.239.85.65:4000/products').then(function (response) {
      vue.productos = response.data;
      console.log(vue.productos)
      })
  },
  methods: {
    goToProducto(idProducto){
      this.$route.push("/informacion/"+idProducto)
    } 
  }

}
</script>
