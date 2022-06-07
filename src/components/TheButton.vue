<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  border: 0;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  width: 15rem;
  font-family: inherit;
  color: inherit;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: #2d6df7;
    color: #fff;
  }
}
</style>
