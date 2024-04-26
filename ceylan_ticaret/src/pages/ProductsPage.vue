<template>
    <ProductList :products="products"/>

    </template>
    
    <script>
    import '../main.css'

    import axios from 'axios';
  

    
    import 'bootstrap/dist/css/bootstrap.css'

    import ProductList from './ProductList.vue';

    export default {
        
    name:"ProductsPage",
    components:{
        ProductList
    },

    data(){
        return{
            products:[],
  

        }
    },
    async created(){

        const response= await axios.get('/api/products');
        const products= response.data;
        this.products=products;
    }
}
    </script>