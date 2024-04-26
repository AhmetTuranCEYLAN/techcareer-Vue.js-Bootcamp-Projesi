<template>
<div v-if="product">
<div class="img-wrap">
    <img :src="product.image" class="img-fluid"/>

</div>
<div>
    <h1>{{ product.name }}</h1>
    <h1>{{ product.price }}</h1>
    <button class="add-to-cart" @click="addToCart">Sepete Ekle</button>

</div>

</div>

<div v-else-if="!product">
<NotFoundPage />

</div>
</template>

<script>
import axios from 'axios';
//import { products } from '../temp-data';
import '../main.css'
import 'bootstrap/dist/css/bootstrap.css'
//import { mapMutations } from 'vuex';
import NotFoundPage from '../pages/NotFoundPage.vue';




export default {
    name:"ProductDetailPage",
    components:{
NotFoundPage
    },
    data(){
        return{
            product:{},
            

        }
    },
    methods:{

       async addToCart(){

        await axios.post('/api/users/123/cart',{
            id:this.$route.params.productId
            

        })

        alert('Ürün sepete başarıyla eklendi!');
        }

    },

async created(){
const response=await axios.get(`/api/products/${this.$route.params.productId}`)
const product= response.data;
this.product=product;
}
}
</script>