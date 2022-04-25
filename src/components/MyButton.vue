<template>
  <button
    :class="[
      'my-button',
      `${variant}` === 'undefined' ? 'default-btn' : '',
      `${variant}` === 'outline' ? 'outline-btn' : '',
      `${disableShadow}` === 'true' ? 'disable-shadow' : '',
      `${disabled}` === 'true' ? 'disabled-btn' : '',
      `${variant}` === 'text' ? 'text-btn' : '',
      `${size}` === 'sm' ? 'sm-size' : '',
      `${size}` === 'md' ? 'md-size' : '',
      `${size}` === 'lg' ? 'lg-size' : '',
      `${color}` === 'default' ? 'default-btn' : '',
      `${color}` === 'primary' ? 'primary-btn' : '',
      `${color}` === 'secondary' ? 'secondary-btn' : '',
      `${color}` === 'danger' ? 'danger-btn' : '',
    ]"
  >
    Default {{ name }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    variant: String,
    disableShadow: Boolean,
    disabled: Boolean,
    size: String,
    color: String,
    name: String,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "../style/variable.less";

.my-button {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: white;
}

.default-btn {
  background-color: @default-bg;

  &:hover,
  &:focus {
    background-color: @hover-bg;
  }
}

.outline-btn {
  color: @outline-color;
  border: 1px solid @outline-color;

  &:hover,
  &:focus {
    background-color: @outline-hover-bg;
  }
}

.disable-shadow {
  color: white;
  background-color: @outline-color;
}

.disabled-btn {
  color: @disabled-color!important;
  background-color: @default-bg!important;

  cursor: not-allowed;
  pointer-events: all !important;
}

.text-btn {
  border: none;
  background-color: white;
  color: @textbtn-color;

  &:hover,
  &:focus {
    background-color: @textbtn-hover-bg;
  }
}

.sm-size {
  width: 70px;
  height: 25px;
}

.md-size {
  width: 100px;
  height: 40px;
}
.lg-size {
  width: 130px;
  height: 55px;
}

.primary-btn {
  color: white;
  background-color: @primary-color;

  &:hover,
  &focus {
    background-color: @primary-color-hover;
  }
}
.secondary-btn {
  color: white;
  background-color: @secondary-color;

  &:hover,
  &focus {
    background-color: @secondary-color-hover;
  }
}
.danger-btn {
  color: white;
  background-color: @danger-color;

  &:hover,
  &focus {
    background-color: @danger-color-hover;
  }
}
</style>
