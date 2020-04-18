<template>
  <div class="view-user-add">
    <h1>
      User add
    </h1>
    <Form v-on:onsubmit="handleSubmit" />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  name: "UserAdd",
  components: {
    Form
  },
  methods: {
    handleSubmit(valueUser) {
      console.log("valueUser", valueUser);
      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify(valueUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(user => this.$router.replace('/users'))
    }
  }
};
</script>

<style lang="scss" scoped></style>
