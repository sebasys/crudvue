<template>
  <div class="modal">
    <div class="modal-inner" :class="classButton">
      <header class="modal-header">
        Header
      </header>
      <div class="modal-body">
        <slot></slot>
      </div>
      <footer class="modal-footer">
        <Button type="primary" onevent="onAccept">Aceptar</Button>
        <Button type="secondary" onevent="onCancel">Cancelar</Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Modal",
  props: {
    type: String
  },
  component: {
    Button
  },
  computed: {
    classButton: function() {
      return this.type === "small" ? "small" : "medium";
    }
  },
  methods: {
    onAccept() {
      this.$emit("onaccept");
    },
    onCancel() {
      this.$emit("oncancel");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  height: 100vh;
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  &-inner {
    background: #fff;
    padding: 10px;
    width: 100%;
    margin: auto;

    &.small {
      max-width: 320px;
    }

    &.medium {
      max-width: 620px;
    }

    &.large {
      max-width: 1024px;
    }
  }

  &.-is-active {
    display: flex;
  }
}
</style>
