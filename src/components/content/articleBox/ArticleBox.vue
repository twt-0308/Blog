<template>
  <div>
    <div class="center_text">
      <a href="#" class="index-img">
        <img src="https://www.moerats.com/usr/themes/handsome/usr/img/sj/1.jpg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>


<style lang="less" scoped>
  .center_text {
    width: 90%;
    background-color: white;
    margin: 20px auto 40px;
    border-radius: 25px;
    box-shadow: 1px 1px 5px 5px rgba(17, 150, 196, 0.35);
    .index-img {
      display: inline-block;
      width: 100%;
      border-radius: 25px;
      transition: all .6s;
      img {
        width: 100%;
        border-radius: 25px;
      }
    }
    .index-img:hover {
      transform: scale(1.05);
    }
  }
</style>
