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
        <v-btn color="red" @click="remove(item._id)"> Remove </v-btn>

      </v-list-item>
    </v-list>
      <h2 style="text-align:right;"> Quantity : {{quantity()}} items </h2>
      <h2 style="text-align:right;"> Total : Rp  {{ total() }}</h2>
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
       },

       quantity() {
          let myCart = this.$store.state.cart
          return myCart.length
       },

       remove(id) {
         this.$store.dispatch('removeProduct', id)
       }
   },
   
   created() {
     this.$store.commit('EMPTYCART')
     this.$store.dispatch('getCart')
   }
}
</script>

<style>

</style>