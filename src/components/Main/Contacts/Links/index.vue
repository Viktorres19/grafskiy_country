<template>
  <nav class="links">
    <ul>
      <li v-for="item in links" :key="item.id">
        <div class="links__img">
          <img :src="require(`@/assets/img/contacts_${item.src}.png`)" :alt="item.alt">
        </div>
        <div class="links__block">
          <a class="links__address" v-if="item.address" :href="item.link">{{item.address}}</a>
          <a v-else-if="item.numbers" v-for="item in item.numbers" :key="item.id" :href="`tel:${item.value}`">{{item.value}}</a>
          <a v-else-if="item.mail" :href="`mailto:${item.mail}`">{{item.mail}}</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Links",
  props: {
    links: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.links {
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    a {
      text-decoration: none;
      color: inherit;
      display: block;
      &:hover {
        text-decoration: underline;
      }
      &.links__address {
        text-decoration: underline;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
  &__img {
    min-width: 43px;
    display: flex;
    justify-content: center;
    margin-right: 30px;
  }
}
</style>