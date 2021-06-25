<template>
  <div>
      <nav class="animation-card">
        <img :src="BaseURL.imageUrl + random(data).image" alt="">
        <a href=""><button>{{ random(data).category.name }}</button></a>
        <h4>{{ random(data).title }}</h4>
      </nav>
  </div>
</template>

<script>

export default {
    name: 'AnimationCard',

    data() {
    return {
      
      BaseURL: {
          imageUrl: 'http://192.144.37.95/images/',
          apiUrl: 'http://192.144.37.95:8080/api/'
      },
      BaseItems: {
        // title: this.data[getValue(index)].title
      },
      obj: {
          langId: 1
      },
      data: {}
    }
  },
  beforeMount(){
    let object = this.obj;
    this.getItems(object,'s');
  },
  methods: {
    random(array){
        const randomIndex = Math.floor(Math.random() * array.length);
        const item = array[randomIndex];
        console.log(item.length)
        
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
   
  }
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