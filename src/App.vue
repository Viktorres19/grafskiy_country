<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Main,
    Header
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'HelveticaNeueCyr-Roman', sans-serif;
  src: url('./assets/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'),
  url('./assets/fonts/HelveticaNeueCyr-Roman.woff') format('woff'),
  url('./assets/fonts/HelveticaNeueCyr-Roman.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'HelveticaNeueCyr-Bold', sans-serif;
  src: url('./assets/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
  url('./assets/fonts/HelveticaNeueCyr-Bold.woff') format('woff'),
  url('./assets/fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'GothamProNarrow-Bold', sans-serif;
  src: url('./assets/fonts/GothamProNarrow-Bold.woff2') format('woff2'),
  url('./assets/fonts/GothamProNarrow-Bold.woff') format('woff'),
  url('./assets/fonts/GothamProNarrow-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}
html {
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: HelveticaNeueCyr-Roman, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 18px;
  padding: 0;
  @media (max-width:768px) {
    font-size: 15px;
  }
}
.container {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 5px;
  overflow: hidden;
}
.h2 {
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  margin: 1.1vw 0;
  @media (max-width:768px) {
    font-size: 30px;
    margin: 15px 0;
  }
}
.h3 {
  font-size: 24px;
  margin: .8vw 0;
  @media (max-width:768px) {
    font-size: 20px;
    margin: 10px 0;
  }
}
.h4 {
  font-size: 18px;
  font-weight: 700;
  @media (max-width:768px) {
    font-size: 15px;
  }
}
p {
  margin: .8vw 0;
  line-height: 1.1;
  @media (max-width:768px) {
    margin: 10px 0;
  }
}
</style>
