<template>
  <section class="outer">
    <div class="container">
      <h2 class="h2">{{ title }}</h2>
      <a class="outer__img" href="https://goo.gl/maps/KDMmyPwYGpxCcMSC8" target="_blank" :title="mapTitle">
        <img :src="require(`@/assets/img/${imgSrc}.jpg`)" :alt="imgAlt">
      </a>
      <p v-for="item in text" :item="item.id">
        {{ item.content }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Outer",
  data(){
    return {
      title: 'ВНЕШНЯЯ ИНФРАСТРУКТУРА',
      mapLink: 'https://goo.gl/maps/KDMmyPwYGpxCcMSC8',
      mapTitle: 'Пожалуйста, перейдите, чтобы посмотреть расположение на карте',
      imgSrc: 'map',
      imgAlt: 'Графский поселок - карта',
      text: [
        { id: 1, content: 'При въезде в поселок расположен пункт охраны со шлагбаумом. На данной территории размещаются магазин продовольственных товаров, аптека, кафе, детская площадка и гостевая парковка.'},
        { id: 2, content: 'При въезде в поселок расположен пункт охраны со шлагбаумом. На данной территории размещаются магазин продовольственных товаров, аптека, кафе, детская площадка и гостевая парковка. При въезде в поселок расположен пункт охраны со шлагбаумом. На данной территории размещаются магазин продовольственных товаров, аптека, кафе, детская площадка и гостевая парковка.'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.outer {
  padding: 2vw 0 3vw;
  @media (max-width:768px) {
    padding: 15px 0 20px;
  }
  &__img {
    display: block;
    width: 100%;
    padding-bottom: 52.6%;
    position: relative;
    height: 0;
    overflow: hidden;
    margin: 2vw 0 2.2vw;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  p {
    margin: 0;
  }
}
</style>