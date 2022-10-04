<template>
  <div class="structure-item" v-for="item in structure" :key="item.id">
    <div class="structure-item__img">
      <img :src="require(`@/assets/img/img_${item.id}.jpg`)" :alt="item.title">
    </div>
    <h3 class="h3">{{ item.title }}</h3>
    <p>{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  name: "StructureItem",
  props: {
    structure: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.structure-item {
  box-sizing: border-box;
  padding: 0 6px;
  width: 33.33%;
  margin-bottom: 1vw;
  @media (max-width:768px) {
    width: 50%;
    margin-bottom: 10px;
  }
  @media (max-width:480px) {
    width: 100%;
  }
  &__img {
    width: 100%;
    padding-bottom: 54.7%;
    position: relative;
    height: 0;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .5s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>