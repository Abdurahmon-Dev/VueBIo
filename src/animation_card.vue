<template>
  <div>
      <nav class="animation-card">
        <img src="@/assets/banana.jpeg" alt="">
        <button>Iqtisodiyot</button>
        <h4>{{ data[6].title }}</h4>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'AnimationCard',

    data() {
    return {
      BaseURL: {
          imageUrl: 'http://192.144.37.95/images/'
      },
      data: {}
    }
  },
  beforeMount(){
    this.getItems();
  },
  methods: {
    async getItems(){
      const res = await fetch('http://192.144.37.95:8080/api/articles?langId=1');
      const data = await res.json();
      this.data = data;
      console.log(data);
      console.log(data[6])
      
    }
  }
}
</script>

<style>
    .animation-card {
        width: 949px;
        height: 412px;
        margin-top: 60px;
        position: relative;
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
</style>