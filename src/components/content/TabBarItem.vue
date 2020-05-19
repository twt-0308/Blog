<template>
  <div class="tab-bar">
    <div @click="indexHandle(index)" v-for="(item,index) in titles" :key="index" class="tab-bar-item" :class="{ tab_item: index === currontIndex }">
      <span :class="item"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currontIndex: 0
    }
  },
  methods: {
    indexHandle(index) {
      this.currontIndex = index
      this.$emit('currontIndex', index)
    }
  }
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dde6e9;
  color: #98a6ad;
}
.tab-bar-item {
  flex: 1;
  cursor: pointer;
}
.tab_item {
  height: 100%;
  border-bottom: 1px solid blue;
}
</style>
