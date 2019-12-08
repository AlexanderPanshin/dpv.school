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