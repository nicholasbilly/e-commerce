<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>GG GAME   </span>
        <span class="font-weight-light">  Online Store</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-if="page === 'login'">
        <span class="mr-2" @click="onRegister">Register</span>
      </v-btn>
      <v-btn text v-if="page === 'register'">
        <span class="mr-2" @click="onLogin">Login</span>
      </v-btn>
      <v-btn text router-link to="/home" v-if="page == 'home'" >
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text router-link to="/cart" v-if="page == 'home'">
        <span class="mr-2"> {{count}} - Cart</span>
      </v-btn>
      <v-btn text color="primary" v-if="page !== 'login' && page !== 'register'" @click="logout">
        <span class="mr-2">SignOut</span>
      </v-btn>
    </v-app-bar>

    <v-content v-if="page === 'login'">
      <Login></Login>
    </v-content>
    <v-content v-if="page === 'register'">
      <Register />
    </v-content>
    <v-content v-if="page === 'home' || page === 'admin'">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { mapState } from 'vuex';
const url = "http://34.67.162.136";
export default {
  name: "App",
  components: {
    Login,
    Register,
    Navbar
  },
  data: () => ({
  }),
  computed: mapState([
    'page',
    'count'
  ]),
  methods: {
    onLogin() {
      this.$store.commit('CHANGEPAGE', 'login')
    },

    logout() {
      localStorage.removeItem('token')
      this.$store.commit('CHANGEPAGE', 'login')
      this.$router.go(-1)
    },

    onRegister() {
      this.$store.commit('CHANGEPAGE', 'register')
    },

    
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$store.dispatch('getProducts')
  },

  // updated() {
  //   this.$store.dispatch('getProducts')
  // }
};
</script>
