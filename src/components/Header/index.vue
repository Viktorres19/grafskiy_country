<template>
<header class="header">
  <div class="logo">
    <div>
      <a href="#">
        <img :src="require(`@/assets/img/${image}.png`)" :alt="image">
      </a>
    </div>
  </div>
  <nav>
    <a href="#" class="opener" @click.prevent="toggleMenu">{{opened ? open : close }} меню</a>
    <ul :class="opened ? 'closed' : ''">
      <li v-for="link in links" :key="link.id"><a href="#">{{ link.text }}</a></li>
    </ul>
  </nav>
  <a href="#contact-us" class="request">{{ requestText }}</a>
</header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      image: 'logo',
      requestText: 'Оставить заявку',
      opened: true,
      open: 'Открыть',
      close: 'Закрыть',
      links: [
        { id: 1, text: 'План застройки' },
        { id: 2, text: 'Инфраструктура' },
        { id: 3, text: 'Галерея' },
        { id: 4, text: 'Дополнительно' },
        { id: 5, text: 'Контакты' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background-color: #ff0000;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
  @media (max-width:768px) {
    flex-wrap: wrap;
    position: relative;
  }
  .logo {
    width: 208px;
    min-width: 208px;
    @media (max-width:768px) {
      order: 1;
      width: 100%;
      div {
        margin: 0 auto;
        width: 208px;
        min-width: 208px;
      }
    }
    a {
      display: block;
      height: 0;
      padding-bottom: 82.2%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  nav {
    flex-grow: 2;
    margin-top: 30px;
    padding: 0 10px 0 40px;
    @media (max-width:768px) {
      order: 3;
      width: 100%;
      padding: 0;
    }
  }
  .opener {
    text-align: center;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    padding-bottom: 10px;
    display: none;
    @media (max-width:768px) {
      display: block;
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    transition: all 1s ease;
    @media (max-width:768px) {
      flex-direction: column;
      align-items: stretch;
      height: auto;
      overflow: auto;
      transition: all 1s ease;
      &.closed {
        height: 0;
        overflow: hidden;
      }
    }
    li {
      margin: 0 6px 6px 0;
      @media (max-width:768px) {
        margin: 0;
      }
    }
    a {
      font-family: HelveticaNeueCyrBold, Avenir, Helvetica, Arial, sans-serif;
      font-size: 22px;
      line-height: 1;
      font-weight: bold;
      color: #333;
      background: #fff;
      padding: 16px 35px;
      border-radius: 30px;
      text-decoration: none;
      display: block;
      text-align: center;
      transition: color .3s ease;
      @media (max-width:768px) {
        border-bottom: 1px solid #ff0000;
        border-radius: 0;
      }
      &:hover {
        color: #acaf12;
      }
    }
  }
  .request {
    border: 2px solid #fff;
    color: #fff;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 30px;
    font-size: 22px;
    transition: all .3s ease;
    text-align: center;
    white-space: nowrap;
    @media (max-width:768px) {
      order: 2;
      display: none;
    }
    &:hover {
      color: #ff0000;
      background-color: #fff;
      border: 2px solid #ff0000;
    }
  }
}
</style>