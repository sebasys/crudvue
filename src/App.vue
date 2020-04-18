<template>
  <div class="app">
    <Header />
    <Main>
      <router-view></router-view>
    </Main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
  data: function() {
    return {
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex-grow: 1;
  }
}
</style>
