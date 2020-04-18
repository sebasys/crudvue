<template>
  <div class="modal" :class="classOpenClose">
    <div class="modal-inner" :class="classModal">
      <header class="modal-header">
        Header
        <Button type="primary" v-on:onevent="onClose">X</Button>
      </header>
      <div class="modal-body">
        <slot></slot>
      </div>
      <footer class="modal-footer">
        <Button type="primary" v-on:onevent="handleAccept">Aceptar</Button>
        <Button type="secondary" v-on:onevent="handleCancel">Cancelar</Button>
      </footer>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Modal",
  components: {
    Button
  },
  props: {
    type: String,
    open: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      openValue: open
    };
  },
  computed: {
    classModal: function() {
      return this.type === "small" ? "small" : "medium";
    },
    classOpenClose: function() {
      return this.open ? "is-active" : "";
    }
  },
  methods: {
    handleAccept() {
      this.$emit("onaccept", true);
    },
    handleCancel() {
      this.$emit("oncancel",false);
    },
    onClose() {
      this.$emit("close");
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
  top: 0;
  left: 0;
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

  &.is-active {
    display: flex;
  }
}
</style>
