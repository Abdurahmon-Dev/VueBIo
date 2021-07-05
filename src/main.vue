<template>
  <div>
    <section>
      <AnimationCard
      :title="data[1].title"
      :date="data[1].date"
      :image="data[1].image"
      :name="data[1].category.name"
      :info="concat(data)"
      >
      </AnimationCard>
    </section>
    <section class="article-card-section">
      <ArticleCard v-for="item of indexCards" :key="item"
        :title="data[item].title"
        :image="data[item].image"
        :name="data[item].category.name"
        :date="data[item].date"
      ></ArticleCard>
    </section>
    <div class="more-cont">
      <button @click="moreInfo" class="more-info">Ko’proq yangilik yuklash</button>
    </div>
  </div>
</template>
<script>
import AnimationCard from "@/animation_card.vue";
import ArticleCard from "@/card.vue";


export default {
  name: "Main",
 
  components: {
    AnimationCard,
    ArticleCard,
  },
  data() {
    return {
      BaseURL:{
          apiUrl: 'http://192.144.37.95:8080/api/'
      },

      data:[],
      

      BASE_OFFSET: 0,
      BASE_SIZE: 7,
      indexCards: 6
      
    };
  },
  beforeMount(){
    this.getItems('s');
  },
 
  methods: {
    concat(item) {
      const array = this.data.concat(item);
      console.log(array);
    },
    
    moreInfo(){
        this.BASE_SIZE += 3
        this.indexCards += 3;
        this.BASE_OFFSET += 3;
        this.getItems('s');
    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    random(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
        return item;
    },
    async getItems(s) {
      let url = `${this.$BASE_API}article${s}?langId=1&size=${this.BASE_SIZE}&offset=${this.BASE_OFFSET}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             `;
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.data = data;
        // console.log(data)

        // console.log(this.data)
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
 @import url(./styles/home_main.css);
</style>