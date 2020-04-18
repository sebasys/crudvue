<template>
  <div class="view-user-detail">
    <h1>User Detail</h1>
    <Card
      v-if="user.id"
      :id="user.id"
      :name="user.name"
      :lastname="user.lastname"
      :title="user.title"
      :description="user.description"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "UserDetail",
  components: {
    Card
  },
  data: function() {
    return {
      user: {}
    };
  },
  mounted() {
    fetch(`http://localhost:3000/users/${this.$route.params.id}`)
      .then(response => response.json())
      .then(user => (this.user = user));
  }
};
</script>

<style></style>
