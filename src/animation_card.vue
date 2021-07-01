<template>
  <div >
    <div class="swiper-container "> 
      <div class="swiper-wrapper">
        <nav class="animation-card swiper-slide">
          <a href=""><img :src="BaseUrl.imageUrl + image" alt=""/></a>
          <button>{{ name }}</button>
          <h4>{{ title }}</h4>
      </nav>
      
      </div>
      <div @click="next" class="nextIcon">
        <i class="ri-arrow-right-fill"></i>
      </div>
      <div @click="prev" class="prevIcon">
        <i class="ri-arrow-left-fill"></i>
      </div>
  </div>
  </div>
</template>

<script>
// import {getItems} from './main.vue'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export default {
  name: "AnimationCard",
  props: {
    title: {
      type: String,
      required: false,
      default: "None title",
    },
    image: {
      type: String,
      required: false,
      default:
        "https://merriam-webster.com/assets/mw/images/video/vid-home-edpick-lg/is-none-singular-or-plural-video-1753-822ce96b7f986e96c31b136a136e5e43@1x.jpg",
    },
    name: {
      type: String,
      required: false,
      default: "None category",
    },
  },
  data() {
    return {
      BaseUrl: {
        imageUrl: "http://192.144.37.95/images/",
      },
      swiper: ''
    };
  },
  methods: {
    next() {
      this.swiper.slideNext();
      this.$AddImage += 1;
      console.log(this.$AddImage);
      // getItems('s')
    },
    prev() {
      this.swiper.slidePrev();
      this.$AddImage -= 1;
      console.log(this.$AddImage);
      // getItems('s')
      
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
};
</script>

<style>
  @import url(./styles/animation_card.css);
  .swiper-container {
        width: 90%;
        margin: 0 !important;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
      

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
     
        -webkit-box-pack: center;
        -ms-flex-pack: center;
    
        -webkit-box-align: center;
        -ms-flex-align: center;
        
     
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 412px;
        /* object-fit: cover; */
 
      }
</style>
