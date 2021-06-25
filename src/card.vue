<template>
  <div>
      <nav class="cont">
          <div>
              <a href="">
                  <img :src="BaseURL.imageUrl + random(data).image" alt="">
              </a>
              <a href="https://google.com">
                  <button>{{ random(data).category.name }}</button>
              </a>
              
          </div>
          
          <div class="title-card">
              <h5 class="line-clamp">{{ random(data).title }}</h5>
              <div class="date-icons">
                  <i class="ri-calendar-2-line"></i><span>{{fixDate(random(data).date)}}</span>
                  <i class="ri-eye-fill"></i><p>15,300</p>
              </div>
          </div>
          
      </nav>
  </div>
</template>

<script>
export default {
    name: 'ArticleCard',
    data() {
    return {
      BaseURL: {
          imageUrl: 'http://192.144.37.95/images/',
          apiUrl: 'http://192.144.37.95:8080/api/'
      },
      BaseItems: {

      },
      obj: {
          langId: 1,
          size: 100,
          offset: 0
      },
      data: {}
    }
  },
  beforeMount(){
    let object = this.obj;
    this.getItems(object,'s');
  },
  methods: {
    fixDate(date){
        const d = new Date(date)
        let dateStr = ("00" + d.getDate()).slice(-2) + "." + ("00" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear()
        return dateStr;
    },
    random(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
        console.log(item.id);
        console.log('Hello')
        return item;
    },
    async getItems(object,s){
      let url = `${this.BaseURL.apiUrl}article${s}?`;
      for (const key in object) {
          if (Object.hasOwnProperty.call(object, key)) {
              const element = object[key];
              url+= `&${key}=${element}`;
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
    // loop(){
    //     for (let index = 0; index < 3; index++) {
    //         const element = data[index];
            
    //     }
    // }
   
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