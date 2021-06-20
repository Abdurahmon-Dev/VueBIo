
<template>
<div style="background-color: #E5E5E5; height:100%;">
  <section ><Header/></section>
  <section style="background-color: #E5E5E5; padding:40px 95px 200px 200px;"><Main/></section>
</div>
</template>

<script>
import Header from "@/header.vue";
import Main from "@/main.vue";

export default {
  
  components: {
    Header,
    Main
  },
 
  data() {
    return {
      data: {}
    }
  },
  beforeMount(){
    this.getItems();
  },
  methods: {
    async getItems(){
      const res = await fetch('http://192.144.37.95:8081/api/articles?langId=1');
      const data = await res.json();
      this.data = data;
      console.log(data)
    }
  }

}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    ul li {
        list-style: none;
    }
</style>
