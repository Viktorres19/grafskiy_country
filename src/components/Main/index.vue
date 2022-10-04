<template>
  <Inner />
  <Outer />
  <ContactUs />
  <Contacts />
</template>

<script>
import Inner from './Inner';
import Outer from './Outer';
import ContactUs from './ContactUs';
import Contacts from './Contacts';
export default {
  name: 'Main',
  components: {Contacts, ContactUs, Outer, Inner}
}
</script>

<style scoped lang="scss">

</style>