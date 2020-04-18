<template>
  <div>
    <h1>Edit</h1>
    <Form v-if="user.id" :dataUser="user" v-on:onsubmit="handleSubmit" />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  name: "UserEdit",
  components: {
    Form
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    handleSubmit(valuesForm) {
      console.log("valuesForm", valuesForm);
      fetch(`http://localhost:3000/users/${valuesForm.id}`, {
        method: "PUT",
        body: JSON.stringify(valuesForm),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(user => this.$router.replace("/users"));
    }
  },
  mounted() {
    fetch(`http://localhost:3000/users/${this.$route.params.id}`)
      .then(response => response.json())
      .then(user => (this.user = user));
  }
};
</script>

<style></style>
