<template>
  <section class="contacts">
    <div class="contacts__row">
      <Socials :socials="socials" />
      <Navigation :navigation="navigation" />
      <Links :links="links" />
    </div>
  </section>
</template>

<script>
import Socials from './Socials';
import Navigation from './Navigation';
import Links from './Links';
export default {
  name: "Contacts",
  components: {Links, Navigation, Socials},
  data(){
    return {
      socials: {
        title: 'Мы в соцсетях',
        icons: [
          { id: '1', src: '1', alt: 'Social' },
          { id: '2', src: '2', alt: 'Social' },
          { id: '3', src: '3', alt: 'Social' },
          { id: '4', src: '4', alt: 'Social' },
          { id: '5', src: '5', alt: 'Social' },
          { id: '6', src: '6', alt: 'Social' }
        ]
      },
      navigation: [
        { id: '1', text: 'Генплан' },
        { id: '2', text: 'Инфраструктура' },
        { id: '3', text: 'Галерея' },
        { id: '4', text: 'Цены' },
        { id: '5', text: 'Контакты' }
      ],
      links: [
        { id: '1',
          src: '1',
          address: 'Харьковская обл. Пос. Циркуны',
          link: 'https://goo.gl/maps/KDMmyPwYGpxCcMSC8'
        },
        { id: '2',
          src: '2',
          numbers: [
            { id: '1', value: '+3809876543'},
            { id: '2', value: '+3809876544'},
          ]
        },
        { id: '3',
          src: '3',
          mail: 'grafsky_info@gmail.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    background-color: #ccc;
    padding: 61px 7% 10px;
    @media (max-width:768px) {
      padding: 40px 10px 10px;
    }
    &__row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 0 -10px;
      @media (max-width:480px) {
        margin: 0;
      }
      > div, nav {
        width: 33.33%;
        padding: 0 10px;
        box-sizing: border-box;
        @media (max-width:768px) {
          width: 50%;
          margin-bottom: 15px;
        }
        @media (max-width:480px) {
          width: 100%;
        }
      }
    }
  }
</style>