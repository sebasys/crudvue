<template>
  <div class="app">
    <Header />
    <Main>
      <!-- <Card
        name="Sebastian"
        lastname="Yabiku"
        title="Developer"
        description="the best"
        :cbDelete="onDelete"
      />
      <Card name="Sebastian" lastname="Yabiku" title="Developer" description="the best" />
      <Card name="Sebastian" lastname="Yabiku" title="Developer" description="the best" />
      <Card name="Sebastian" lastname="Yabiku" title="Developer" description="the best" /> -->
      <template v-if="users.length">
        <Card
          v-for="user in users"
          v-bind:key="user.id"
          :id="user.id"
          :name="user.name"
          :lastname="user.lastname"
          :title="user.title"
          :description="user.description"
          v-on:emitdelete="onDelete"
          v-on:emitedit="onEdit"
        />
      </template>
      <Button type="primary" v-on:onevent="addUser" v-else>
        Agregar Usuario
      </Button>

      <input v-model="message" placeholder="hola mundo" />

      {{ message | capitalize }}
    </Main>
    <Footer />
    <Modal type="medium">hola mundo</Modal>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import Button from "./components/Button.vue";
import Modal from "./components/Modal.vue";
import {methods} from './mixings/methods';
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    Card,
    Button,
    Modal
  },
  directives: {
    focus: {
      bind: function(el, binding, vnode) {
        console.log("el", el);
        console.log("el", binding);
        console.log("el", vnode);

        el.value = "hola mundo";
      },
      inserted: function(el, binding, vnod) {
        el.onkeyup = function(e) {
          console.log(e.target.value);
        };
      },
      update: function(el, binding, vnode, oldVnode) {
        console.log("uodate!!");
      },
      componentUpdated: function() {
        console.log("componentUpdated");
      },
      unbind: function() {
        console.log("unbind");
      }
    }
  },
  filters: {
    capitalize: function(value) {
      console.log(value);
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  mixins: [methods],
  data: function() {
    return {
      users: [],
      message: ""
    };
  },
  methods: {
    onDelete(id) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(() => (this.users = this.users.filter(user => user.id !== id)));
    },
    onEdit(id) {
      console.log("edit app");
    },
    addUser() {
      console.log("agregar usuario");
    },
    getUsers() {
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => (this.users = users));
    }
  },
  mounted() {
    console.log("montado!!");
    this.getUsers();

    this.sayHello("desde app");
    this.sayGoodBye();
  }
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
