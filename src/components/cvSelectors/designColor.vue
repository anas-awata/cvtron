<template>
  <fieldset class="form-section">
    <div class="expansion-panel-header">
      <div class="expansion-panel-title">
        <h4 class="form-title">Design</h4>
        <button
          id="expansionPanelPersonal"
          type="button"
          @click="this.hidden = !this.hidden"
          class="col-1 btn btn-outline-secondary"
        >
          <i class="fa-solid fa-angle-down"> </i>
        </button>
      </div>
    </div>
    <div class="container" :class="{ open: !hidden }">
      <h5 class="form-sub-title">Headings Color</h5>
      <div class="row colorwraper">
        <div class="current-color col-9"></div>
        <button
          class="btn btn-success col-3"
          @click="headingsColorHidden = !headingsColorHidden"
        >
          change
        </button>
      </div>
      <div>
        <ColorPicker
          :color="color"
          @color-change="updateHeadingsColor"
          v-if="!headingsColorHidden"
        />
      </div>
      <h5 class="form-sub-title">CV Colors</h5>
      <div class="row colorwraper">
        <div class="cv-first-color col-9"></div>
        <button class="btn btn-success col-3" @click="ColorOneVisibility">
          change
        </button>
      </div>
      <div class="row colorwraper">
        <div class="cv-second-color col-9"></div>
        <button class="btn btn-success col-3" @click="ColorTwoVisibility">
          change
        </button>
      </div>
      <div>
        <ColorPicker
          :color="cvColors.firstcolor"
          @color-change="updateCvColorone"
          v-if="!firstColorHidden"
        />
        <ColorPicker
          :color="cvColors.secondcolor"
          @color-change="updateCvColortwo"
          v-if="!secondColorHidden"
        />
      </div>
    </div>
  </fieldset>
</template>

<script>
import { ColorPicker } from "vue-accessible-color-picker";
export default {
  name: "design-color",
  components: { ColorPicker },
  data() {
    return {
      hidden: false,
      color: "#66cc99",
      cvColors: { firstcolor: "#fff", secondcolor: "#3d3e42" },
      headingsColorHidden: true,
      firstColorHidden: true,
      secondColorHidden: true,
    };
  },
  methods: {
    updateHeadingsColor(eventData) {
      this.color = eventData.cssColor;
      this.$store.commit("settingheadingcolor", this.color);
    },
    updateCvColorone(eventData) {
      this.cvColors.firstcolor = eventData.cssColor;
      console.log(this.cvColors);
      this.$store.commit("settingcvcolors", this.cvColors);
      console.log(this.$store.state.cvColors[0]);
    },
    updateCvColortwo(eventData) {
      this.cvColors.secondcolor = eventData.cssColor;
      console.log(this.cvColors);
      this.$store.commit("settingcvcolors", this.cvColors);
      console.log(this.$store.state.cvColors[1]);
    },
    ColorOneVisibility() {
      if (this.firstColorHidden == true && this.secondColorHidden == true) {
        this.firstColorHidden = false;
      } else if (
        this.secondColorHidden == false &&
        this.firstColorHidden == true
      ) {
        this.secondColorHidden = true;
        this.firstColorHidden = false;
      } else if (
        this.secondColorHidden == true &&
        this.firstColorHidden == false
      ) {
        this.firstColorHidden = true;
      }
    },
    ColorTwoVisibility() {
      if (this.firstColorHidden == true && this.secondColorHidden == true) {
        this.secondColorHidden = false;
      } else if (
        this.firstColorHidden == false &&
        this.secondColorHidden == true
      ) {
        this.secondColorHidden = false;
        this.firstColorHidden = true;
      } else if (
        this.firstColorHidden == true &&
        this.secondColorHidden == false
      ) {
        this.secondColorHidden = true;
      }
    },
  },
  computed: {
    headingColor() {
      return this.$store.state.headingColor;
    },
    cvColorOne() {
      return this.$store.state.cvColors[0];
    },
    cvColorTwo() {
      return this.$store.state.cvColors[1];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: none;
  background-color: #fff;
  margin-bottom: 20px;
}
.open {
  display: block;
  animation: growDown 0.5s ease-in-out forwards;
  transform-origin: top center;
}
@keyframes growDown {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  margin-right: 2.7rem;
}
.form-title {
  display: inline;
  padding: 10px;
  margin-left: 2.5rem;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
}
.expansion-panel-title {
  background-color: #fff;
}
svg {
  margin-right: 3px;
}
.form-sub-title {
  text-align: left;
  margin-left: 3%;
  display: inline-block;
}
.current-color {
  background-color: v-bind(headingColor);
  margin-left: 9%;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  border: solid;
}
.cv-first-color {
  background-color: v-bind(cvColorOne);
  margin-left: 9%;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  border: solid;
}
.cv-second-color {
  background-color: v-bind(cvColorTwo);
  margin-left: 9%;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  border: solid;
}
.colorwraper {
  justify-content: space-around;
  margin-bottom: 15px;
}
</style>
