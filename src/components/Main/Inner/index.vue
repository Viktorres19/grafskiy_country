<template>
  <section class="inner">
    <div class="container">
      <h2 class="h2">Инфраструктура внутри поселка</h2>
      <div class="structure">
        <StructureItem :structure="structure" />
      </div>
    </div>
  </section>
</template>

<script>
import StructureItem from './StructureItem';
export default {
  name: 'Inner',
  components: {StructureItem},
  data(){
    return {
      title: 'Инфраструктура внутри поселка',
      structure: [
        { id: '1', img: '1', title: 'Детская площадка', text: 'Удивительная природа, чистый воздух, прекрасное расположение, позволяющее добраться до торговых и транспортных артерий города' },
        { id: '2', img: '2', title: 'Футбольное поле', text: 'Удивительная природа, чистый воздух, прекрасное расположение, позволяющее добраться до торговых и транспортных' },
        { id: '3', img: '3', title: 'Магазины, кафе, аптека', text: 'Удивительная природа, чистый воздух, прекрасное расположение, позволяющее добраться' },
        { id: '4', img: '4', title: 'Круглосуточная охрана и видеонаблюдение', text: 'Удивительная природа, чистый воздух, прекрасное расположение' },
        { id: '5', img: '5', title: 'Гостевая парковка', text: 'Удивительная природа, чистый воздух' },
        { id: '6', img: '6', title: 'Озеро, лес, водохранилище', text: 'Удивительная природа' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.structure {
  display: flex;
  justify-content: flex-start;
  margin: 0 -6px;
  padding-top: 1vw;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
}
</style>