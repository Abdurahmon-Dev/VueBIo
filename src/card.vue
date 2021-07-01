<template>
  <div>
      <nav class="cont">
          <div>
              <a href="">
                  <img :src="BASE_URL.IMAGE_URL + image" alt="">
              </a>
              <a href="https://google.com">
                  <button>{{name}}</button>
              </a>
              
          </div>
          
          <div class="title-card">
              <h5 class="line-clamp">{{ title }}</h5>
              <div class="date-icons">
                  <i class="ri-calendar-2-line"></i><span>{{fixDate(date)}}</span>
                  <i class="ri-eye-fill"></i><p>15,300</p>
              </div>
          </div>
          
      </nav>
  </div>
</template>

<script>
export default {
   
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
        required: true,
        default: 'None time!'
      }
    },
    data(){
        return {
            BASE_URL: {
                IMAGE_URL: 'http://192.144.37.95/images/'
            }
        }
    },
  methods: {
    fixDate(date){
        const time = new Date(date)
        let dateStr = ("00" + time.getDate()).slice(-2) + "." + ("00" + (time.getMonth() + 1)).slice(-2) + "." + time.getFullYear()
        return dateStr;
    },
  }
}
</script>

<style>
    @import url(./styles/card.css);

</style>