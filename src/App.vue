<template>
  <div v-if="isMobile" class="nav-container">
    <nav>
      <router-link class="cvselectorlink" to="/pdf">CV Selector </router-link>
      <router-link to="/cvpage"> View CV</router-link>
      <router-view></router-view>
    </nav>
  </div>
  <div v-else>
    <pdf />
  </div>
</template>

<script>
import pdf from "./views/pdf.vue";
export default {
  components: { pdf },
  mounted() {
    console.log(this.$store.state.personal["Fname"]);
    console.log(screen.width);
  },
  computed: {
    isMobile() {
      if (screen.width < 768) {
        console.log("t");
        return true;
      } else {
        console.log("f");
        return false;
      }
    },
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
    console.log(localStorage.getItem("store"));
    console.log(this.$store.state.jobs[0]["title"]);
  },
  updated() {
    console.log(localStorage.getItem("store"));
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10% 19.7%;
    border-bottom-style: ridge;
    white-space: nowrap;
    border-bottom-width: thin;
    font-family: auto;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom-width: medium;
      vertical-align: text-bottom;
      padding-bottom: 11%;
      background-color: aliceblue;
    }
  }
}
.nav-container {
}
.vacp-color-input-group,
.vacp-format-switch-button,
.vacp-copy-button {
  display: none;
}
.cvselectorlink {
  margin-left: -11%;
}
.form-title {
  white-space: nowrap;
}
@media (max-width: 768px) {
  .profile {
    border-left-style: none;
  }
}
</style>
