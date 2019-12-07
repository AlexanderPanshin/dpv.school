<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters style="flex-wrap: nowrap;">
      <v-col
        cols="2"
        class="flex-grow-0 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
             <div class="details">
        <div class="container">
            <div class="row">
                <!--нижк v for начинаем перебирать массив items -->
                <div class="col-md-12" v-for="(item,index) in items" :key="index"> 
                <!-- v if  из массива выводим только переданный id -->
                <div v-if="proId == item.userid">
                    <h1>{{item.username}}</h1>
                    <img :src="item.image" >
                </div>
                </div>
            </div>
        </div>
    </div>
        </v-card>
      </v-col>
      <v-col
        cols="1"
        style="min-width: 100px; max-width: 100%;"
        class="flex-grow-1 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          I'm 1 column wide and I grow to take all the space
        </v-card>
      </v-col>
      <v-col
        cols="5"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          I'm 5 column wide and I shrink if there's not enough space
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>
<script>
import axios from 'axios';
  export default {
    data() {
        return {
            proId:this.$route.params.Pid,
                items: [],
        }
    },

created() {
      axios.get(`https://my-json-server.typicode.com/AlexanderPanshin/dpv.school/user`)
      .then(response=> {
        this.items= response.data;
      })
      .catch(error=> {
        window.console.log(error);
        this.errored=true;
      })
  }
  }
  
</script>