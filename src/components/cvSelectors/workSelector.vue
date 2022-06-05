<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <h4 class="form-title">Experience</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.workhidden = !this.workhidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="work-container" :class="{ open: !workhidden }">
        <div>
          <button
            v-if="works.length < 3"
            @click="pushWork"
            class="btn btn-success"
          >
            add new work
            <i class="fa-solid fa-plus"> </i>
          </button>
          <component
            v-for="(work, index) in works"
            :key="index"
            :works="works"
            :is="work.data"
            :index="index"
            :deleteWork="deleteMyWork"
          >
          </component>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import { mapMultiRowFields } from "vuex-map-fields";
import workItem from "./workItems.vue";
export default {
  name: "work-selector",
  components: { workItem },
  data() {
    return {
      workhidden: true,
      //works: [{ data: "workItem" }, { data: "workItem" }],
      Jobtitle: "",
      Company: "",
      Location: "",
      From: "",
      To: "",
    };
  },
  methods: {
    pushWork() {
      //this.works.push({ data: "workItem" });
      this.$store.commit("updateworks");
      this.$store.commit("settingjob");
    },
    deleteMyWork(index) {
      this.works.splice(index, 1);
      console.log(index);
      console.log(this.works);
    },
  },
  updated() {
    console.log("selectormount");
  },
  computed: {
    ...mapMultiRowFields(["works"]),
  },
  mounted() {
    console.log(this.works);
    console.log(this.works[0].data);
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.work-container {
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
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  margin-right: 2.7rem;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
</style>
