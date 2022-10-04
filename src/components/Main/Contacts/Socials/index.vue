<template>
  <nav class="socials">
    <h4 class="h4">{{ socials.title }}</h4>
    <ul>
      <li v-for="item in socials.icons" :key="item.id">
        <a href="#">
          <img :src="require(`@/assets/img/social_${item.src}.png`)" :alt="item.alt">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Socials",
  props: {
    socials: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.socials {
  .h4 {
    margin: 0 0 9px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    li {
      margin-right: 7px;
      a {
        display: block;
        transition: all .3s ease;
        &:hover {
          opacity: .6;
        }
        img {
          display: block;
        }
      }
    }
  }
}
</style>