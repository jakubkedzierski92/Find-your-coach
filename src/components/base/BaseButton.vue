<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
     mode: {
        type: String,
        required: false,
        default: ""
     }
  },
};
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: blue;
  border: 1px solid black;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
opacity: 50%;
}

.flat {
  background-color: transparent;
  color: blue;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: black;
  color: black;
}

.flat:hover,
.flat:active{
    background-color: #d2e9ff;
}
.outline:hover,
.outline:active {
    background-color: #d1d1d1;
}
</style>
