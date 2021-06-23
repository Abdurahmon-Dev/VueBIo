
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
