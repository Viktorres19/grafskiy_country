<template>
  <footer class="footer">
    {{ text }}
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
      text: '© 2017 - GRAFSKY',
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    margin: 25px 7% 37px;
    font-family: 'GothamProNarrow-Bold', Avenir, Helvetica, Arial, sans-serif;
    text-align: right;
  }
</style>