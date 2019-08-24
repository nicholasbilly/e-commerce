<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Register </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>

                </v-tooltip>
                <v-tooltip right>

                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                    label="Name"
                    type="text"
                    v-model="name"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="registerUser">Register</v-btn>
              </v-card-actions>
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
  name: 'login',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    name: '',
    email: '',
    password: ''
  }),
  methods: {
    registerUser() {
      let {name, email, password} = this
      axios
        .post(`${url}/users/register`, { name, email, password })
        .then(user => {
          Swal.fire({
            position: "center",
            type: "success",
            title: "Register Success, please login to continue",
            showConfirmButton: false,
            timer: 1500
          });
          this.$store.state.page = "login";
        });
    }
  }
}
</script>
