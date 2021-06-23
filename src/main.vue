<template>
  <div>
      <section>
          <AnimationCard></AnimationCard>
      </section>
      <section class="article-card-section">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
      </section>
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
    }
}
</script>

<style>
    .article-card-section{
        display: flex;
        gap: 11px;
    }
</style>