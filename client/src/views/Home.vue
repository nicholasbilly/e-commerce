<template>
  <v-card dark>
    <v-img
      class="grey lighten-2"
      height="100%"
      width="100%"
      src="../assets/red-dead.png"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md2
        >
          <h1 class="display-3 font-weight-light">
            Welcome to Game Store
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Completes your Gaming Desire
          </div>
          <v-btn
            color="primary"
            depressed
            rounded
            router-link to="/shop"
          >
            Shop Now
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>  
  </v-card>
</template>

<script>
import axios from 'axios'
const url = "http://34.67.162.136"

  export default {
    name: 'Home',
    components: {
      
    },
    data () {
      return {
      }
    },

    created() {
      let token = localStorage.getItem('token')
      axios.get(`http://34.67.162.136/carts/one`, {headers: {token}})
      .then(({data}) => {
        if(!data) {
          axios.post(`http://34.67.162.136/carts`, {}, {headers: {token}})
          .then(() => {
            console.log('cart created')
          })
        }
      })
    }
  }
</script>