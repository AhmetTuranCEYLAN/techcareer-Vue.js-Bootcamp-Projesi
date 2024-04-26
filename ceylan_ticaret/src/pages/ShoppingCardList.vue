<template>
 
      <div class="product-container" v-for="product in products" :key="product.id">

<img :src="product.image" class="product-image"/>

<div class="details-wrap">

  <h3>{{ product.name }}</h3>
  <p>{{ product.price }}</p>
  
</div>
<button class="remove-button" @click="$emit('remove-from-cart',product.id)">Sepetten Kaldır</button>

</div>


<button class="btn btn-dark text-white">Çıkışa Doğru Devam Et</button>




</template>

<script>
import '../main.css'
import 'bootstrap'
//import { cardItems } from '../temp-data';
export default {
name:"ShoppingCardList",

props:['products']
}
</script>