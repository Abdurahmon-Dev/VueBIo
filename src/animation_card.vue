<template>
  <div>
    <nav class="animation-card">
      <a href=""><img :src="BaseUrl.imageUrl + image" alt=""/></a>
      <button>{{ name }}</button>
      <h4>{{ title }}</h4>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AnimationCard",
  props: {
    title: {
      type: String,
      required: false,
      default: "None title",
    },
    image: {
      type: String,
      required: false,
      default:
        "https://merriam-webster.com/assets/mw/images/video/vid-home-edpick-lg/is-none-singular-or-plural-video-1753-822ce96b7f986e96c31b136a136e5e43@1x.jpg",
    },
    name: {
      type: String,
      required: false,
      default: "None category",
    },
  },
  data() {
    return {
      BaseUrl: {
        imageUrl: "http://192.144.37.95/images/",
      },
    };
  },
};
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
  font-family: "Dela Gothic One", cursive;
  font-family: "Roboto", sans-serif;
  font-family: "Source Sans Pro", sans-serif;
}
</style>