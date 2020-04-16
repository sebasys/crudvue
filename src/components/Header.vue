<template>
  <header class="header">
    <a class="header__logo" href="#">Logo</a>
  </header>
</template>

<script>
import {methods} from '../mixings/methods';
export default {
  name: "Header",
  mixins: [methods],
  mounted() {
    this.sayHello("desde el header");
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.header {
  background: map-get($color-branding, "primary");
  padding: 20px;
}
</style>
