<template>
  <div>
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data" :key="item">
          <nav class="swipper-main-card">
            <div>
              <img :src="$BASE_IMAGE_URL + item.image" alt="">
              <button>{{ item.category.name }}</button>
            </div>
            <h4>{{ item.title }}</h4>
          </nav>
        </div>
      </div>
    </div>
     <div @click="next" class="nextIcon">
        <i class="ri-arrow-down-s-line"></i>
      </div>
      <div @click="prev" class="prevIcon">
        <i class="ri-arrow-up-s-line"></i>
      </div>
    </div>
</template>

<script>

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export default {
  name: "AnimationCard",
  props: {
    info: [],
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
      swiper: '',
      data: [],
      BASE_SIZE: 6
    };
  },
  methods: {
    async getItems(s) {
      let url = `http://192.144.37.95:8080/api/article${s}?langId=1&size=${this.BASE_SIZE}&offset=0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             `;
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.data = data;
        console.log(data)
        console.log('Hellllllllo')
        console.log(this.data)
      } catch (e) {
        console.log(e);
      }
    },
    next() {
      this.swiper.slideNext();
      // this.$AddImage += 1;
      // console.log(this.$AddImage);
      this.BASE_SIZE +=1
      this.getItems('s')
    },
    prev() {
      this.swiper.slidePrev();
      // this.$AddImage -= 1;
      // console.log(this.$AddImage);
      this.getItems('s')
      
    }
  },
  beforeMount() {
      this.getItems('s');
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: false,

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
.nextIcon {
    border-radius: 50%;
    border: 2px white solid;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 80%;
    right: 2%;
    z-index: 10;
    margin: 10px;
    
  }
  .nextIcon i {
    font-size: 18px;
    color: black;
    z-index: 10;
  }
  .prevIcon {
    border-radius: 50%;
    border: 2px white solid;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 80%;
    left: 0%;
    z-index: 10;
    margin: 10px;
  }
  .prevIcon i {
    font-size: 18px;
    color: black;
    z-index: 10;
  }
  .swipper-main-card {
    width: 100%;
    height: 100%;
    
  }
  .swipper-main-card button {
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: 16px;
    padding: 10px;
    opacity: 0.7;
    width: 15%;
    height: 54px;
    outline: none;
    border: none;
    color: white;
    background-color: black;
  }
  .swipper-main-card h4  {
    color: white;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    bottom: 40px;
    left: 40px;
    width: 85%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

  }
  .swiper-container {
        width: 90%;
        margin: 0 !important;
        background-color: aqua;
        height: 412px;        
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
