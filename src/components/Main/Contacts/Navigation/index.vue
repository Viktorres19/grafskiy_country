<template>
  <nav class="navigation">
    <ul>
      <li v-for="item in navigation" :key="item.id"><a href="#">{{item.text}}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    navigation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin-bottom: 14px;
    }
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>