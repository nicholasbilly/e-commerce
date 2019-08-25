<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom></v-tooltip>
                <v-tooltip right></v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field label="Email" name="email" type="text" v-model="email"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary">Login</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
const url = "http://localhost:3000";

export default {
  name: "login",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: ""
  }),
  methods: {
    login() {
      let { email, password } = this;
      axios
        .post(`${url}/users/login`, { email, password })
        .then(data => {
          localStorage.setItem("token", data.data.token);
          if (data.data.role === "admin") {
            this.$store.commit("CHANGELOGIN", true);
            this.$store.commit("CHANGEPAGE", "admin");
            this.$router.push("/admin");
          } else {
            this.$store.commit("CHANGELOGIN", true);
            this.$store.commit("CHANGEPAGE", "home");
            this.$router.push("/home");
          }
          Swal.fire({
            position: "center",
            type: "success",
            title: "Login success",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(() => {
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "Wrong username/password",
          });
        });
    }
  }
};
</script>
