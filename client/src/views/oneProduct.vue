<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" text>Details</v-btn>
      </template>
      <h1 style="text-align:center;">{{name}}</h1>
      <img :src="image" alt="gambar" >
      <p style="color:white;text-align:center;">Price: {{price}}</p>
      <v-btn color="white" text @click="back">Close</v-btn>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
const url = "http://localhost:3000";

export default {
   data () {
      return {
          dialog: false,
          name: '',
          image: '',
          price: ''
      }
   },

   methods: {
       fetchData() {
           let productId = this.$route.params.id 
           let token = localStorage.getItem('token')
           axios.get(`${url}/products/${productId}`, {headers: {token}})
           .then(({data}) => {
               this.name = data.name
               this.image = data.image
               this.price = data.price
           })
           .catch(console.log)
       },

       back() {
           this.dialog = false,
           this.$router.go(-1)
       }
   },

   watch: {
    "$route.params.id": function() {
        if(this.$route.params.id){
      this.fetchData();
        } 
    }
   }
}
</script>

<style>

</style>