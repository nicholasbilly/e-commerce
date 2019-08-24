<template>
    <v-container fluid class=“my-5”>
       <v-layout row wrap>
         <v-flex xs12 sm3 v-for="(product, index) in products" :key="index">
           <Card :barang="product"/>   
         </v-flex>
       </v-layout>
     </v-container>
</template>

<script>
import Card from '../components/Card'
import { mapState } from 'vuex';
export default {
    name: 'Shop',
    components: {
        Card
    },
    data () {
        return {

        }
    },
    computed: mapState([
        'products'
    ])
}
</script>

