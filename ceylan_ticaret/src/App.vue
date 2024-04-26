<template>
 <div class="row">
  
  <div class="nav-bar">
  
  

    <router-link to="/products" class="products-link" style="text-decoration: none; color: black;">
      
      <div class="logo-wrap pt-4" style="background-color: #ffcc00; color: black;  border-radius: 50px;">
        
        CEYLAN TİCARET
      </div>
   
    
    </router-link>

  

 
  <button class="col-md-4" style="margin-left: 340px; background-color: #ffcc00; color: black;">
  
    <router-link to="/cart"  style="text-decoration: none; color: black;">
      Alışveriş Sepeti
    </router-link>
  </button>



  </div>

  
 </div>


  <router-view></router-view>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
