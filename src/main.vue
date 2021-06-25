<template>
  <div>
      <section>
          <AnimationCard></AnimationCard>
      </section>
      <section class="article-card-section">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          
      </section>
      <div>
          <button @click="hello" class="more-info">Ko’proq yangilik yuklash</button>
      </div>
  </div>
</template>

<script>
import AnimationCard from '@/animation_card.vue';
import ArticleCard from '@/card.vue';

export default {
    name: 'Main',
    components:{
        AnimationCard,
        ArticleCard
    },
    methods: {
        hello(){
            alert('Hello')
        }
        
    },
    
}
</script>

<style>
    .article-card-section{
        display: flex;
        gap: 11px;
        flex-wrap: wrap ;
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