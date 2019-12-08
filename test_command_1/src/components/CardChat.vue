<template>
  <v-card
    class="mx-auto"
    max-width="500px"
  >
  <div v-for="(post,index) in posts" :key="index">
       <div v-if="proId == post.botsid">
    <v-img
      :src="post.imgbots"
      height="200px"
    ></v-img>

    <v-card-title>
      {{post.botsname}}
    </v-card-title>

    <v-card-subtitle>
      {{post.botscompany}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{post.descriptionbots}}
        </v-card-text>
      </div>
    </v-expand-transition>
       </div>
    </div>
  </v-card>
  
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                proId:this.$route.params.Pid,
                direction: 'bottom',
                fab: false,
                globalid: null,
                dialog: false,
                redactPost: false,
                message: null,
                show: true,
                n: 0,
                items: [],
                posts: [],
                errors: [],
                redlabel: "",
                formIsValid: [
                    (v) => !!v || 'Field is required'
                ]
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
      axios.get(`https://my-json-server.typicode.com/AlexanderPanshin/dpv.school/bots`)
      .then(response=> {
        this.posts= response.data;
      })
      .catch(error=> {
        window.console.log(error);
        this.errored=true;
                })
        },
        
            }
        
    
</script>
