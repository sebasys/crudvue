<template>
  <footer class="footer">
    footer
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.footer {
  background: map-get($color-branding, "primary");
  padding: 20px;
}
</style>
