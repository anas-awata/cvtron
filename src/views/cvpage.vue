<template>
  <div class="container">
    <design-color />
    <theme2 />
  </div>
</template>

<script>
import theme2 from "../components/them2/theme2.vue";
import designColor from "../components/cvSelectors/designColor.vue";
export default {
  name: "cv-page",
  components: { theme2, designColor },
};
</script>
<style scoped>
.container {
  margin-top: 10%;
  border-style: none;
}
</style>
