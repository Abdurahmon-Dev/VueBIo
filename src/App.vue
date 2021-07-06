
<template>
<div>
  <div class="Contanier">
  <BaseHeader/>
  <section class="BaseMain"><BaseMain/></section>
  <BaseFooter/>
</div>
</div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer/index.vue"

export default {
  
  components: {
    BaseHeader: Header,
    BaseMain:Main,
    BaseFooter: Footer
  },
}
</script>

<style>
    @import url(./Styles/reset.css);
</style>
<style>
  .Contanier {
    height:100%; 
    /* max-width:1390px; */
    margin:0 auto
  }
  .BaseMain {
      background-color: #E5E5E5;
      padding:120px 95px 200px 200px;
  }
</style>
