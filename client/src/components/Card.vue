<template>
<v-card
    :loading="loading"
    class="text-xs-center ma-3"
    max-width="374"
  >
    <v-img
      height="250"
      :src="barang.image"
    ></v-img>

    <v-card-title>{{barang.name}}</v-card-title>
    <router-link :to="`/shop/${barang._id}`" v-if="page === 'home'"><oneProduct/></router-link>
    <v-card-text>

      <div class="my-4 subtitle-1 yellow--text">
        Rp • {{barang.price}}
      </div>

      <div>stock left : {{barang.stock}} </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions v-if="page === 'home'">
      <v-btn
        color="white"
        text
        @click="addcart(barang)"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
    
    <v-card-actions v-if="page === 'admin'">
      <v-btn
        color="white"
        text
        @click="editProduct(barang._id)"
      >
        Edit
      </v-btn>
      <v-btn
        color="white"
        text
        @click="deleteProduct(barang._id)"
      >
       Delete
      </v-btn>
    </v-card-actions>
  </v-card>
      
  
</template>

<script>
const url = "http://localhost:3000";
import axios from "axios";
import { mapState } from "vuex";
import Swal from 'sweetalert2'
import oneProduct from '../views/oneProduct'
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    props: ['barang'],
    components: {
      oneProduct
    },

    computed: mapState([
      'page',
      'cart',
      'count'
    ]),

    methods: {
      // reserve () {
      //   this.loading = true
      //   setTimeout(() => (this.loading = false), 500)
      // },

      deleteProduct(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            let token = localStorage.getItem('token')
            axios.delete(`${url}/products/${id}`, {headers: {token}})
            .then(deleted => {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
             })
            .catch(console.log)     
          }
       })
       .catch(console.log)
      },

      editProduct(id) {
        this.$router.push(`/admin/${id}`)
      },

      addcart(payload) {
        this.$store.commit('ADDTOCART', payload)
        this.$store.commit('ADDCOUNT', 1)
      }
    },
    updated() {
    this.$store.dispatch('getProducts')
  }
  }
</script>

