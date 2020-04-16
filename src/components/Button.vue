<template>
  <button @click="onEvent" class="button" :class="classButton">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    size: String
  },
  computed: {
    classButton: function() {
      return this.type === "primary" ? "button-primary" : "button-secondary";
    }
  },
  methods: {
    onEvent() {
      this.$emit('onevent')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.button {
  background: map-get($color-branding, default);
  padding: 20px;
  border: 1px solid #cdcdcd;
  color: #fff;
  margin: 0 5px;
  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
  }

  &-primary {
    background: map-get($color-branding, primary);
  }

  &-secondary {
    background: map-get($color-branding, secondary);
  }
}
</style>
