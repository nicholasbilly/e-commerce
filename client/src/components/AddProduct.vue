<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">New Product</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Name" v-model="name" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Price" v-model="price" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Stock" v-model="stock"></v-text-field>
              </v-col>
              <v-col cols="12">
                <input type="file" name="image" @change="previewFile" ref="myFiles">
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="createProduct">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
const url = "http://localhost:3000";

export default {
  name: "add",
  data() {
    return {
      dialog: false,
      name: "",
      price: "",
      image: "",
      stock: ""
    };
  },
  methods: {
    createProduct() {
      let token = localStorage.getItem("token");
      let { image } = this;
      var bodyFormData = new FormData();
      bodyFormData.append("image", image[0]);
      axios
        .post(`${url}/images`, bodyFormData, { headers: { token } })
        .then(({ data }) => {
          console.log(data)
          axios.post(
            `${url}/products`,
            {
              name: this.name,
              price: this.price,
              stock: this.stock,
              image: data.link
            },
            { headers: { token } }
          );
        })
        .then(result => {
          this.$store.state.products.unshift(result);
          this.dialog = false
        })
        .catch(console.log);
    },

    previewFile() {
        this.image = this.$refs.myFiles.files
    },


  }
};
</script>

<style>
</style>