<template>
    <div>
        <v-card >
            <v-card-title>
                List of bots
                <v-spacer></v-spacer>
                <v-text-field
                        append-icon="mdi-search-web"
                        label="Search"
                        single-line
                        hide-details
                        v-model="search"
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="items"
                    :search="search"
                    @onRowClick="openDetail"
                    

            >
                <template v-slot:item="props" 
                 >
                    <tr>
                        <td v-for="id in id"
        :key="id">{{ props.item.botsid }}</td>
                        <td @click="goTodetail(props.item.id)" class="text-xs-right" >{{ props.item.title }}</td>
                        <td class="text-xs-right">{{ props.item.company }}</td>
                        <td class="text-xs-right">{{ props.item.userpassed }}</td>
                        <td class="text-xs-right">{{ props.item.questions_num }}</td>
                        <td class="text-xs-right">{{ props.item.createdate }}</td>
                    </tr>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
        import axios from 'axios';
    export default {
        data() {
            return {
                selected: [],
                search: '',
                items: [],
                headers: [
                    {
                        text: 'Poll title',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Company', value: 'company'},
                    {text: 'Number of questions', value: 'numquest'},
                    {text: 'Polled users', value: 'userpolls'},
                    {text: 'Creation date', value: 'creatdate'},
                ],
                /*items: [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%'
                    },
                    {
                        value: false,
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%'
                    },
                    {
                        value: false,
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%'
                    },
                    {
                        value: false,
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%'
                    },
                    {
                        value: false,
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%'
                    },
                    {
                        value: false,
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%'
                    },
                    {
                        value: false,
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%'
                    },
                    {
                        value: false,
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%'
                    }
                ]*/
            }
        },
        created() {
      axios.get(`https://my-json-server.typicode.com/AlexanderPanshin/dpv.school/bots`)
      .then(response=> {
        this.items= response.data;
      })
      .catch(error=> {
        window.console.log(error);
        this.errored=true;
      })

    },
    methods: {
        openDetail(a) {
                if (event.target.classList.contains('btn__content')) return;
                alert('Polls title: \n' + a.userid);
            },
    goTodetail (prodId) {
      let proId=prodId
      this.$router.push({name: 'editbots', params: {Pid: proId}})
    }
  }
    }
</script>
