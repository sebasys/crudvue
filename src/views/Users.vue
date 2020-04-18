<template>
  <div class="view-users">
    <h1>Usuarios</h1>
    <Card
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :name="user.name"
      :lastname="user.lastname"
      :title="user.title"
      :description="user.description"
      v-on:emitdelete="handleDelete"
      v-on:emitedit="handleEdit"
    />
    <router-link to="/users/add">
      <Button type="primary">
        Agregar Usuario
      </Button>
    </router-link>

    <Modal
      v-on:close="flagModal = !flagModal"
      :open="flagModal"
      type="medium"
      v-on:onaccept="handleAcceptModal"
      v-on:oncancel="flagModal = !flagModal"
    >
      Estas seguro que deseas eliminar este elemento??
    </Modal>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
export default {
  name: "Users",
  components: {
    Card,
    Button,
    Modal
  },
  data: function() {
    return {
      users: [],
      flagModal: false,
      hasDeleted: false,
      currentId: ""
    };
  },
  methods: {
    handleDelete(id) {
      this.flagModal = true;
      this.currentId = id;
    },
    deleteUser() {
      fetch(`http://localhost:3000/users/${this.currentId}`, {
        method: "DELETE"
      })
        .then(response => response.json())
        .then(() => {
          this.users = this.users.filter(user => user.id !== this.currentId);
          this.hasDeleted = false;
          this.flagModal = false;
          this.currentId = "";
        });
    },
    handleEdit(id) {
      console.log("handleEdit", id);
    },
    handleAcceptModal(value) {
      console.log("value", value);
      if (value) {
        this.hasDeleted = true;
      }
    }
  },
  watch: {
    hasDeleted: function(value) {
      console.log("hasDeleted", value);
      if (value) {
        this.deleteUser();
      }
    }
  },
  mounted() {
    fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => (this.users = users));
    console.log("montado componente!!");
  }
};
</script>

<style lang="scss" scoped></style>
