<template>
  <v-container class="grey lighten-1">
    <v-row no-gutters style="flex-wrap: nowrap;">
      <v-col
        cols="3"
        class="flex-grow-0 flex-shrink-0"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1 black--text">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple accent-4"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
  </v-card>
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