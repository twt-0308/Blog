<template>
  <div>
    <div class="main_top">
      <div class="main_text">
        <slot name="text"></slot>
        <div class="main_twt"><slot name="twt"></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  .main_top {
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #dde6e9;
  }
  .main_text {
    padding: 20px;
    font-size: 19px;
    font-weight: 450;
  }
  .main_twt {
    margin-top: 10px;
    font-size: 13px;
    color: #98a6ad;
  }
</style>
