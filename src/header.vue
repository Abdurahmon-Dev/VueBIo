<template>
  <header class="header-cont">
      <div class="header-title">
          <a href=""><h1>Article</h1></a>
      </div>
      <ul class="categories">
          <li><a href="" class="category">Iqtisodiyot</a></li>
          <li><a href="" class="category">Ta’lim</a></li>
          <li><a href="" class="category">Qurilish</a></li>
          <li><a href="" class="category">Muhim</a></li>
      </ul>
      
      <section class="last-section" @change="hello">
        <select name="" id="" class="languages">
            <option value="uz">O`zbekcha</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
        </select>
        <a href="" class="phone">
            <i class="ri-phone-line"></i>
            <b>71 665-22-22</b>
        </a>
      </section>
     
  </header>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        hello(){
            alert('hello')
        }
    }
}
</script>

<style>
    .header-cont{
        display: flex;
        position: fixed;
        top: 0;
        height: 60px;
        align-items: center;
        width: 100%;
        background-color: #ffff;
        padding:0 200px;
        z-index: 5;
    }
    .header-title a h1{
        color: orangered !important; 
        font-size: 20px;
        font-weight: 700;
    }
    .categories{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-right: 215px;
        margin-left: 80px;
    }
    .category{
        color: #000421;
        font-weight: 400;
        font-size: 16px;
    }
    .category:hover{
        color: orange;
    }
    .last-section{
        display: flex;
        justify-content: flex-end;
        
    }
    .last-section select {
        width: 100px;
        outline: none;
        border: none;
        background-color: #ffff;
        margin-left: 92px;
        margin-right: 27px;
        font-size: 16px;
        transition: 0.5s ease;
    }
    .last-section select:hover{
        color: orange;
       
        cursor: pointer;
      
    }
    .ri-phone-line{
        color: orangered;
        font-size: 20px;
        margin-top: 9px;
    }
    .phone b {
        color: orangered;
        position: relative;
        bottom: 3px;
    }

</style>