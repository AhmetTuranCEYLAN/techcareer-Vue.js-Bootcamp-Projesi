<template>
    <br/>
    <br/>
    <div class="row row-cols-2">
    
    
      <div class="product-item" v-for="product in products" :key="product.id">
      <img :src="product.image" class="img-fluid"/>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="">{{ product.price }}</p>
      
          <router-link :to="'/products/'+product.id">
          
          <button class="btn btn-dark">Detayları Göster</button>
          </router-link>
        
      </div>
     
    </div>
    <router-view></router-view>
  
      </template>
      
      <script>
      //import { products } from '../temp-data';
      import '../main.css'
      
      import 'bootstrap/dist/css/bootstrap.css'
  
      export default {
          
      name:"ProductsList",
     props:['products']
  }
      </script>