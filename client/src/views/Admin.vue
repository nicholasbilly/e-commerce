<template>
<v-content>
  <v-btn
    text>
     <AddProduct/>
  </v-btn>
  <router-view></router-view>
      <v-container fluid class=“my-5”>
       <v-layout row wrap>
         <v-flex xs12 sm3 v-for="(product, index) in products" :key="index">
           <Card :barang="product"/>   
         </v-flex>
       </v-layout>
     </v-container>

</v-content>
    

      
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import AddProduct from '../components/AddProduct'
import Card from '../components/Card.vue'
const url = "http://34.67.162.136";
export default {
  name: "admin",
  components: {
      AddProduct,
      Card
  },
  data() {
    return {
  
    };
  },
  computed: mapState([
      'products'
  ]),
  methods: {


  }
};
</script>

<style>
</style>