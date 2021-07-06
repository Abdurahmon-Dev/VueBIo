<template>
  <header>
      <nav class="header-menu">
          <section>
              <h1 class="title">Article</h1>
              <div @click="ToggleClass" class="header-burger">
                  <i></i>
              </div>
          </section>
          <section class="menu-box">
              <ul class="categories">
                  <li><a href="" class="category">Iqtisodiyot</a></li>
                  <li><a href="" class="category">Ta’lim</a></li>
                  <li><a href="" class="category">Qurilish</a></li>
                  <li><a href="" class="category">Muhim</a></li>
              </ul>

              <div class="line" style="display:none;"></div>

              <div class="languages">
                  <select name="" id="">
                      <option value="uz">O`zbekcha</option>
                      <option value="ru">Русский</option>
                      <option value="en">English</option>
                  </select>
                  <a href="tel:71 665-22-22" class="phone">
                      <i class="ri-phone-line"></i>
                      <b>71 665-22-22</b>
                  </a>
              </div>

          </section>
      </nav>
  </header>
</template>
<script>

export default {
    name: 'Header',
    methods: {
        ToggleClass(){
            document.querySelector('.header-burger').classList.toggle('active')
            document.querySelector('.menu-box').classList.toggle('active')
        }
    }
}
</script>

<style>
    @import url(./header.css);
    

</style>