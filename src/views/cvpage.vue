<template>
  <div class="container">
    <theme2 />
  </div>
</template>

<script>
import theme2 from "../components/them2/theme2.vue";
export default {
  name: "cv-page",
  components: { theme2 },
};
</script>
<style scoped>
.container {
  margin-top: 10%;
  border-style: none;
}
</style>
