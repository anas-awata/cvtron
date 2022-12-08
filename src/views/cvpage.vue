<!--page just for mobile phone to view cv in defferent page-->
<template>
  <mynav />
  <div v-if="isMobile" class="nav-container">
    <nav>
      <router-link class="cvselectorlink col-6" to="/pdf"
        >CV Selector
      </router-link>
      <router-link class="col-6" to="/cvpage"> View CV</router-link>
    </nav>
  </div>
  <div class="container">
    <templates-Selector />
    <design-color />
    <theme-1 v-if="this.$store.state.templatesShow.themeone"> </theme-1>
    <theme-2 v-if="this.$store.state.templatesShow.themetwo"></theme-2>
    <theme-3 v-if="this.$store.state.templatesShow.themethree"></theme-3>
    <theme-4 v-if="this.$store.state.templatesShow.themefour"></theme-4>
    <theme-6 v-if="this.$store.state.templatesShow.themesix"></theme-6>
  </div>
</template>

<script>
import mynav from "../components/myNav.vue";
import theme1 from "../components/theme1/theme1.vue";
import theme2 from "../components/theme2/theme2.vue";
import theme3 from "../components/theme3/theme3.vue";
import theme4 from "../components/theme4/theme4.vue";
import theme6 from "../components/theme6/theme6.vue";
import designColor from "../components/cvSelectors/designColor.vue";
import templatesSelector from "../components/cvSelectors/templatesSelector.vue";
export default {
  name: "cv-page",
  components: {
    designColor,
    mynav,
    templatesSelector,
    theme1,
    theme2,
    theme3,
    theme4,
    theme6,
  },
  computed: {
    isMobile() {
      if (screen.width < 768) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
.container {
  margin-top: 35%;
  border-style: none;
  color: #222;
}
.nav-container {
  background-color: ghostwhite;
  position: fixed;
  top: 49px;
  width: 100%;
  z-index: 1000;
}
</style>
