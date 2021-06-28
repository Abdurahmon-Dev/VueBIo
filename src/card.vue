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
        type: String,
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
    .line-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }

    .cont{
        width: 309px;
        height: 320px;
        /* -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.16); 
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.16); */
        background-color: #E5E5E5;
        margin-bottom: 20px;
    }
    .cont > div {
        width: 100%;
        height: 200px;
        background-color: #E5E5E5;
        position: relative;
        margin-bottom: 10px;
    }
    .cont > div img {
        width: 100%;
        height: 100%;
    }
    .cont > div button {
        width: 127px;
        height: 44px;
        padding: 10px;
        background-color: black;
        color: white;
        position: absolute;
        top: 20px;
        right: 20px;
        border: none;
        cursor: pointer;
        opacity: 0.7;
    }
    .title-card h5{
        width: 309px;
        font-weight: 600;
        color: #19181F;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .date-icons {
        display: flex;
    }
    .date-icons span {
        margin-right: 21px;
    }

</style>