<template>
  <article class="card">
    <header>
      <span @click="redirect">{{ name }} {{ lastname }}</span>
    </header>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <footer>
      <Button type="primary" v-on:onevent="handleDelete">
        Eliminar
      </Button>
      <Button type="secondary" v-on:onevent="handleEdit">
        Editar
      </Button>
    </footer>
  </article>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Card",
  components: {
    Button
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    handleDelete() {
      this.$emit("emitdelete", this.id);
      // console.log("delete card", this.id);
    },
    handleEdit() {
      this.$emit("emitedit", this.id);
      // console.log("edit card", this.id);
      this.$router.push(`/users/edit/${this.id}`);
    },
    redirect() {
      console.log("redirect!!", this.$router, this.id);
      this.$router.push(`/users/${this.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.card {
  border: 1px solid #cdcdcd;
  margin-bottom: 20px;

  header {
    border-bottom: 1px solid #cdcdcd;
    padding: 10px;
    background: map-get($color-branding, complementary);
    color: white;
  }

  > div {
    padding: 10px;
    border-bottom: 1px solid #cdcdcd;
  }

  footer {
    padding: 10px;
  }

  button {
    padding: 5px;
  }
}
</style>
