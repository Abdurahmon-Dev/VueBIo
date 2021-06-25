<template>
  <div class="footer"> 
      <footer class="page_footer">
          <div class="page_footer_info">
              <p class="page_footer_article_1">Articleuz </p>
              <p class="page_footer_article_2">Qo`shimcha</p>
              <p class="page_footer_article_3">Yuklab olish</p>
              <div class="menu-list">
                  <span class="list">
                  <a href="">
                      Sayt haqida
                  </a>
              </span>
              <span class="list">
                  <a href="">
                      Bizning jamoa
                  </a>
              </span >
              <span class="list">
                  <a href="">
                      Hamkorlik
                  </a>
              </span>
              <span class="list">
                  <a href="">
                      Qo’llab quvvatlash
                  </a>
              </span>
              </div>
              <span class="Information">
                  Netus magna euismod gravida in amet, in odio. Gravida urna, feugiat suspendisse odio amet sagittis, nulla ipsum. Nisl vestibulum fermentum ut dolor. Nam eu accumsan sed in pharetra, facilisis fringilla egestas tempor. 
              </span>
           <div class="reset-list">
                  <div class="social-item">
                      <a href="#" target="_blank">
                        <img   src="@/assets/telegram.jpg">
                      </a> 
                  </div>
                  <div class="social-item">
                      <a href="#" target="_blank">
                        <img   src="@/assets/instagram.jpg">
                      </a>
                  </div>
                  <div class="social-item">
                      <a href="#" target="_blank">
                     <img  src="@/assets/fecbook.png">
                  </a>
                  </div>
              </div>
           </div>
              <div class="store-btns">
                  <a href="#" target="">
                    <img class="app" src="@/assets/app.png">
                  </a>
                  <a href="#" target="">
                    <img class="play_market" src="@/assets/i.jpg">
                  </a>
                  </div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background-color: white;
    width: 100%;
    height: 325px;
    position: relative;
    top: 100px;
}
.Information{
    width: 555px;
    height: 90px;
    display: inline-block;
    position: relative;
    top: 90px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}
.page_footer_article_1{
    font-weight: bold;
    display: table-caption;
    position: relative;
    top: 40px;
    font-size: 16px;
}
.page_footer_article_2{
    display: table-caption;
    position: absolute;
    top: 40px;
    left: 60%;
    font-size: 16px;
    font-weight: bold;
}
.page_footer_article_3{
    display: table-caption;
    position: absolute;
    top: 40px;
    left: 80%;
    font-size: 16px;
    font-weight: bold;
}
.page_footer{
    width: 80%;
    height: 100%;
    margin: 0 auto;
}
.page_footer_info{
    width: 100%;
    height: 100%;
}
.store-btns{
    width: 166px;
    display: inline-flex;
    flex-wrap: wrap;
    position: absolute;
    top: 80px;
    left: 77.5%;
}
.app{
    width: 100%;
    height:49px; 
}
.play_market{
    width: 100%;
    height:100%; 
}
.menu-list{
    display: inline-flex;
    width: 110px;
    height: 175px;
    flex-wrap: wrap;
    position: absolute;
    left: 60%;
    top: 75px;
    
}
.menu-list a{
    color: black;
}
.reset-list{
    position: relative;
    width: 125px;
    display: inline-flex;
    right: 555px;
    top: 150px;
}
.social-item{
    width: 35px;
    position: relative;
}
.social-item img{
    width: 100%;
}
.social-item + .social-item{
    margin-left: 20px;
}

</style>