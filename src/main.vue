<template>
  <div>
    <section>
      <AnimationCard v-for="index in 1 " :key="index" 
      :title="data[index].title"
      :image="data[index].image"
      :name="data[index].category.name"
      :date="data[index].date"
      >
      </AnimationCard>
    </section>
    <section class="article-card-section">
      <ArticleCard v-for="item in indexCards" :key="item"
      :title="data[item].title"
      :image="data[item].image"
      :name="data[item].category.name"
      :date="data[item].date"
      ></ArticleCard>
    </section>
    <div>
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

      data:{},
      obj: {
          langId:1,
          offset:0,
          size:100
      },
      indexCards: 6
      
    };
  },
  beforeMount(){
    let object = this.obj;
    this.getItems(object,'s');
  },
  methods: {
    moreInfo(){
        this.indexCards = this.indexCards + 3
    },
    random(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
        return item;
    },
    async getItems(object, s) {
      let url = `${this.BaseURL.apiUrl}article${s}?`;
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const element = object[key];
          url += `&${key}=${element}`;
        }
      }
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.data = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.article-card-section {
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
}
.more-info {
  padding: 15px;
  background-color: black;
  color: white;
  position: relative;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  border: none;
  margin: 50px 0px 0px 365px;
  cursor: pointer;
}
</style>