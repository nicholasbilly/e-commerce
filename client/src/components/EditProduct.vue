<template>
  <v-row justify="center">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Product</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-img height="300" width="250" :src="image"></v-img>
            <v-col cols="12">
              <v-text-field label="Name" v-model="name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Price" v-model="price" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Stock" v-model="stock"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="backButton">Back</v-btn>
        <v-btn color="blue darken-1" text @click="updateProduct">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import axios from "axios";
import Swal from 'sweetalert2'
const url = "http://34.67.162.136";

export default {
  name: "edit",
  data() {
    return {
      name: "",
      price: "",
      stock: "",
      image: ""
    };
  },
  methods: {
      updateProduct() {
          let productId = this.$route.params.id
          let token = localStorage.getItem('token')
          axios.patch(`${url}/products/${productId}`, {
              name: this.name,
              price: this.price,
              stock: this.stock
          }, { headers: {token}})
          .then(({data}) => {
              Swal.fire({
              position: "center",
              type: "success",
              title: "Product Updated",
              showConfirmButton: false,
              timer: 1500
             })
              this.$router.push('/admin')
          })
      },

      backButton() {
          this.$router.push('/admin')
      },
  },

  created() {
    let productId = this.$route.params.id;
    let token = localStorage.getItem("token");
    axios
      .get(`${url}/products/${productId}`, { headers: { token } })
      .then(({ data }) => {
        this.name = data.name;
        this.price = data.price;
        this.stock = data.stock;
        this.image = data.image;
      });
  }
};
</script>

<style>
</style>