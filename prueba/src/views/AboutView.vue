<template>
  <div class="Productos detallados">
    <div class="post" v-for="producto in productos" v-bind:key="producto._id">
      <div class="card" style="width: 20rem">
        <img :src="producto.images[0]" class="card-img-top"  alt="" /> 
        <h6 class="card-text">{{ producto.name }}</h6>
        <h6 class="card-title">{{ producto.createdAt }}</h6>
        <h6 class="card-title">{{ producto.description }}</h6>
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
  mounted() {
    let vue = this;
    axios.get('//170.239.85.65:4000/products/').then(function (response) {
        vue.productos = response.data;
        console.log(vue.productos)
      })
  }
}
</script>
