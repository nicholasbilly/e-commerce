<template>
  <v-container>
      <v-list>
      <v-list-item
        v-for="(item, index) in cart"
        :key="index"
      >

        <v-list-item-avatar>
          <v-img :src="item.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> {{item.name}} </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title> Rp {{ item.price }}</v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
      <h1 style="text-align:center;"> Total : Rp  {{ total() }}</h1>
      <v-btn color="white" text @click="back">Close</v-btn>
  </v-container>

     
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
const url = "http://34.67.162.136";

export default {
   data () {
      return {
      }
   },
   computed: mapState([
       'cart'
   ]),

   methods: {
       back() {
           this.$router.go(-1)
       },

       total() {
           let myCart = this.$store.state.cart
           let sum = 0
           for(let i = 0; i < myCart.length; i++) {
               sum += myCart[i].price
           }
           return sum
       }
   },
}
</script>

<style>

</style>