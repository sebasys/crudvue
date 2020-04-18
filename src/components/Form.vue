<template>
  <form @submit.prevent="handleSubmit">
    <input required type="text" name="name" v-model="name" placeholder="Name" />
    <br />
    <input required type="text" name="lastname" v-model="lastname" placeholder="Lastname" />
    <br />
    <input required type="number" name="age" v-model="age" placeholder="Age" />
    <br />
    <input type="text" name="title" v-model="title" placeholder="title" />
    <br />
    <textarea name="description" v-model="description" placeholder="Description"> </textarea>
    <br />
    <Button type="primary">Enviar</Button>
  </form>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Form",
  components: {
    Button
  },
  props: {
    dataUser: Object
  },
  data: function() {
    return {
      name: "",
      lastname: "",
      age: "",
      title: "",
      description: ""
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("onsubmit", {
        name: this.$data.name,
        lastname: this.$data.lastname,
        age: this.$data.age,
        title: this.$data.title,
        description: this.$data.description,
        id: this.$data.id
      });

    }
  },
  mounted() {
    console.log("this.dataUser mounted", this.dataUser);

    console.log(this.$data);
    if (this.dataUser) {
      this.$data.name = this.dataUser.name;
      this.$data.lastname = this.dataUser.lastname;
      this.$data.age = this.dataUser.age;
      this.$data.title = this.dataUser.title;
      this.$data.description = this.dataUser.description;
      this.$data.id = this.dataUser.id;
    }
  }
};
</script>

<style></style>
