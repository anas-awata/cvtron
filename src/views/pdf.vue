<!--the design cv page-->
<template>
  <div class="" :class="{ noprint: noPrint }">
    <mynav />
  </div>
  <div v-if="isMobile" class="nav-container" :class="{ noprint: noPrint }">
    <nav>
      <router-link class="cvselectorlink" to="/pdf">CV Selector </router-link>
      <router-link to="/cvpage"> View CV</router-link>
    </nav>
  </div>
  <div class="row top-fix">
    <div class="cvinput col-md-4 col-sm-12" :class="{ noprint: noPrint }">
      <!--show the cv selectors but without the templates and design for phone-->
      <div v-if="!isMobile">
        <templates-selector />
        <design-color />
      </div>
      <selector />
      <work-selector />
      <study-selector />
      <skills-Selector />
      <courses-selector />
      <div class="download-wrapper" :class="{ noprint: noPrint }">
        <button @click="printme" class="btn btn-success">
          Download PDF <i class="fa-solid fa-download"> </i>
        </button>
      </div>
    </div>
    <!--show the template that is picked and stored in the store-->
    <div v-show="!isMobile" ref="printMe" id="content" class="col-sm-12">
      <theme-1 v-if="this.$store.state.templatesShow.themeone"> </theme-1>
      <theme-2 v-if="this.$store.state.templatesShow.themetwo"></theme-2>
      <theme-3 v-if="this.$store.state.templatesShow.themethree"></theme-3>
      <theme-4 v-if="this.$store.state.templatesShow.themefour"></theme-4>
      <theme-6 v-if="this.$store.state.templatesShow.themesix"></theme-6>
    </div>
  </div>
</template>

<script>
//import { jsPDF } from "jspdf";
//import * as html2canvas from "html2canvas";
//import $ from "jquery";
import theme1 from "../components/theme1/theme1.vue";
import theme2 from "../components/theme2/theme2.vue";
import theme3 from "../components/theme3/theme3.vue";
import theme4 from "../components/theme4/theme4.vue";
import theme6 from "../components/theme6/theme6.vue";
import selector from "../components/cvSelectors/personalSelector.vue";
import workSelector from "../components/cvSelectors/workSelector.vue";
import coursesSelector from "../components/cvSelectors/coursesSelector.vue";
import studySelector from "../components/cvSelectors/studySelector.vue";
import skillsSelector from "../components/cvSelectors/skillsSelector.vue";
import templatesSelector from "../components/cvSelectors/templatesSelector.vue";
import designColor from "../components/cvSelectors/designColor.vue";
import mynav from "../components/myNav.vue";
export default {
  name: "my-pdf",
  data() {
    return {
      //to hide the parts we don't want to show in printing
      noPrint: true,
    };
  },
  methods: {
    printme() {
      window.print();
    },
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
  components: {
    selector,
    workSelector,
    coursesSelector,
    studySelector,
    skillsSelector,
    designColor,
    mynav,
    theme1,
    theme2,
    theme3,
    theme4,
    theme6,
    templatesSelector,
  },
};
</script>

<style lang="scss" scoped>
.row {
  height: 100%;
}
.pdf {
  position: absolute;
  float: left;
}
#content {
  padding-right: 3%;
  padding-left: 40%;
  padding-top: 9%;
  background: #eee;
  margin-bottom: 5%;
}
.cvinput {
  background-color: #222;
  color: #eee;
  padding-right: 0 !important;
  position: fixed;
  top: 11%;
  left: 0;
  bottom: 11%;
  width: 35%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #222;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.btn {
  margin-top: 20px;
}
.pdf-section {
  /*position: fixed;
  right: 0;
  height: 100%;*/
  background-color: #eee;
}

@media (min-width: 768px) {
  .btn {
    float: left;
    margin-left: 30%;
    margin-bottom: 20px;
  }
  .download-wrapper {
    position: fixed;
    bottom: 1px;
    background: #333;
    width: 35%;
    margin-left: -12px;
    margin-bottom: -1px;
  }
}
.nav-container {
  position: fixed;
  top: 49px;
  width: 100%;
  z-index: 1000;
}
.top-fix {
  margin-right: 0 !important;
}
.navbar {
  background: #333 !important;
  color: #fff;
}
@media (max-width: 768px) {
  .cvinput {
    margin-top: 30%;
    position: static;
    width: 100%;
    padding-top: 10%;
  }
  .profile {
    border-left-style: none;
  }
  .navbar {
    background: #fff !important;
    color: #000;
  }
}
</style>
