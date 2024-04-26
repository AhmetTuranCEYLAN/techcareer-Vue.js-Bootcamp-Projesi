<template>
  <div>
    <h1>Sepet</h1>

    <div v-if="cardItems.length>0">
   <ShoppingCardList @remove-from-cart="removeFromCart($event)" :products="cardItems"/>
  </div>

  <div v-else-if="!cardItems.length">
    <h1>Sepette Ürün Bulunmamaktadır</h1>

  
  </div>


  </div>
</template>

<script>
import '../main.css'
import axios from 'axios';

import ShoppingCardList from './ShoppingCardList.vue';
//import { cardItems } from '../temp-data';
export default {
name:"ShoppingCardPage",
components:{
  ShoppingCardList,
},
data(){
  return{
    cardItems:[],
  }
  
},

methods:{
async removeFromCart(productId){

  const response=await axios.delete(`/api/users/123/cart/${productId}`);
  const updatedCart=response.data;
  this.cardItems=updatedCart;
}
},
async created(){
  const response=await axios.get('/api/users/123/cart')

  const cardItems=response.data;
  this.cardItems=cardItems;
}
};
</script>
   