<template>
  <section id="contact-us" class="contact-us">
    <div class="container">
      <h2 class="h2">
        {{ title }}
      </h2>
      <h2 class="h2"><span>{{ subTitle }}</span></h2>
      <div class="form-wrapper">
        <form class="contact-form" @submit.prevent="showAlert">
          <label for="name">
            <input v-model="valueName" class="input" id="name" type="text" pattern="[а-яА-Я]+" :placeholder="placeholderName" required="">
          </label>
          <label for="surname">
            <input v-model="valueSurname" class="input" id="surname" type="text" pattern="[а-яА-Я]+" :placeholder="placeholderSurname" required="">
          </label>
          <label for="tel">
            <input v-model="valueTel" class="input" id="tel" type="tel" name="tel" :placeholder="placeholderTel" required="">
          </label>
          <label for="email">
            <input v-model="valueEmail" class="input" id="email" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" :placeholder="placeholderEmail" required="">
          </label>
          <input class="subscribe" type="submit" value="Отправить">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data(){
    return {
      title: 'ПОНРАВИЛОСЬ?',
      subTitle: 'Запишитесь на просмотр',
      placeholderName: 'Имя',
      placeholderSurname: 'Фамилия',
      placeholderTel: 'Телефон',
      placeholderEmail: 'Email',
      valueName: '',
      valueSurname: '',
      valueTel: '',
      valueEmail: '',
      buttonText: 'Отправить'
    }
  },
  methods: {
    showAlert() {
      alert("Спасибо! Ваше имя: " + this.valueName + ", " + "Ваша Фамилия: " + this.valueSurname + ", " + "Ваша телефон: " + this.valueTel + ", " + "Ваша Емейл: " + this.valueEmail)
      this.valueName = ''
      this.valueSurname = ''
      this.valueTel = ''
      this.valueEmail = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-us {
  background-color: #ff0000;
  color: #fff;
  padding: 3vw 0 3.8vw;
  .h2 {
    margin-bottom: 1.5vw;
    span {
      text-transform: none;
    }
  }
}
.form-wrapper {
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  overflow: hidden;
}
.contact-form {
  width: 100%;
  margin: 0 -12px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-top: 3.1vw;
  @media (max-width:768px) {
    margin: 0;
  }
  label {
    width: 50%;
    padding: 0 12px;
    box-sizing: border-box;
    @media (max-width:768px) {
      width: 100%;
      padding: 0;
    }
    input {
      width: 100%;
      background: transparent;
      box-sizing: border-box;
      border: none;
      border-bottom: 2px solid #fff;
      box-shadow: 0px 11px 10px -10px #fff, inset 0px -8px 10px -10px #fff;
      color: #fff;
      font-size: 18px;
      margin-bottom: 50px;
      outline: none;
      padding-bottom: 5px;
      @media (max-width:768px) {
        margin-bottom: 40px;
      }
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: inherit;
      }
    }
  }
  .subscribe {
    margin: 40px auto 0;
    padding: 15px 60px;
    background-color: #fff;
    border: none;
    border-radius: 30px;
    font-size: 24px;
    color: #000;
    font-weight: bold;
    font-family: "HelveticaNeueCyrBold", Avenir, Helvetica, Arial, sans-serif;
    cursor: pointer;
    transition: background-color .3s ease;
    @media (max-width:768px) {
      margin: 0 auto;
      padding: 12px 40px;
      font-size: 20px;
    }
    &:hover {
      background-color: darken(#fff, 10%);
    }
  }
}
</style>