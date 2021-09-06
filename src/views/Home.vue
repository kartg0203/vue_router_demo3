<template>
  <div>home</div>
</template>

<script>
import { onActivated, onDeactivated } from "vue";
export default {
  name: "Home",
  setup() {
    onActivated(() => {
      console.log("Home 緩存的組件激活時調用");
    });

    onDeactivated(() => {
      console.log("Home 緩存的組件停用時調用");
    });
  },
  create() {
    console.log("Home組件被創建");
  },
  unmounted() {
    console.log("Home組件被銷毀");
  },
};
</script>

<style>
</style>
