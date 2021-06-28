<template>
  <div>
      <nav class="animation-card">
        <a href=""><img :src="BaseURL.imageUrl + image" alt=""></a>
        <button>{{name}}</button>
        <h4>{{title}}</h4>
      </nav>
</div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';



export default {
    name: 'AnimationCard',
    props: {
      title: {
        type: String,
        required: true,
        default: 'None title'
      },
      image: {
        type: String,
        required: false,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.merriam-webster.com%2Fvideo%2Fis-none-singular-or-plural&psig=AOvVaw0oQr5t4sAJyHmSwVDP4EA9&ust=1624971409940000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCor6-wuvECFQAAAAAdAAAAABAD'
      },
      name: {
        type: String,
        required: false,
        default: 'None category'
      },
      date: {
        type: String,
        required: true,
        default: 'None time!'
      }
    },

    // components: {
    //   Swiper,
    //   SwiperSlide,
    // },
    data() {
    return {
      BaseURL: {
          imageUrl: 'http://192.144.37.95/images/',
      },
    }
  },

  // methods: {
  //     onSwiper(swiper) {
  //       console.log(swiper);
  //     },
  //     onSlideChange() {
  //       console.log('slide change');
  //     },
  //   },
}

</script>

<style>
    .animation-card {
        width: 949px;
        height: 412px;
        margin-top: 60px;
        position: relative;
        margin-bottom: 40px;
     
    }
    .animation-card img {
        width: 100%;
        height: 100%;
    }
    .animation-card button {
        outline: none;
        border: none;
        color: white;
        width: 147px;
        height: 54px;
        background-color: black;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
        font-size: 16px;
        padding: 10px;
        opacity: 0.7;
    }
    .animation-card h4 {
        color: white;
        font-size: 24px;
        font-weight: 700;
        position: absolute;
        bottom: 40px;
        left: 40px;
        width: 750px;
    }
    h4 {
    -webkit-text-stroke: 2px black; /* width and color */
    font-family: 'Dela Gothic One',cursive; 
    font-family: 'Roboto', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
    }
</style>