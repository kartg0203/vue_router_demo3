<template>
  <div>about</div>
</template>

<script>
import { onUnmounted, onActivated, onDeactivated } from "vue";
export default {
  name: "About",
  setup() {
    // document.title = "About";
    console.log("About組件被創建");

    onUnmounted(() => {
      console.log("About組件被銷毀");
    });

    onActivated(() => {
      console.log("About 緩存的組件激活時調用");
    });

    onDeactivated(() => {
      console.log("About 緩存的組件停用時調用");
    });
  },
};
</script>

<style>
</style>
