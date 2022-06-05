<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <button
            @click="deleteStudy(index)"
            class="btn btn-danger col-1 btndelete"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <h4 class="form-title">Study 1 details</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.Hidden = !this.Hidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !Hidden }">
        <div class="item1">
          <label for="Spec" class="form-label"
            ><i class="fa-solid fa-user-circle"> </i> Specialization</label
          >
          <input
            id="Spec"
            type="text"
            class="form-control"
            ref="input"
            v-model="spec"
            @keyup="myStudy"
          />
        </div>
        <div class="item2">
          <label for="Uni" class="form-label"
            ><i class="fa-solid fa-university"> </i> University</label
          >
          <input
            id="Uni"
            type="text"
            class="form-control"
            @keyup="myStudy"
            v-model="university"
          />
        </div>
        <div class="item3">
          <label for="Location" class="form-label"
            ><i class="fa-solid fa-location"> </i> Location</label
          >
          <input
            id="Location"
            type="text"
            class="form-control"
            @keyup="myStudy"
            v-model="location"
          />
        </div>
        <div class="item4">
          <label for="from" class="form-label"
            ><i class="fa-solid fa-calendar-alt"> </i> From</label
          >
          <input
            id="from"
            type="date"
            class="form-control"
            @change="myStudy"
            v-model="from"
          />
        </div>
        <div class="item5">
          <label for="To" class="form-label"
            ><i class="fa-solid fa-calendar-alt"> </i> To</label
          >
          <input
            id="To"
            type="date"
            class="form-control"
            @change="myStudy"
            v-model="to"
          />
        </div>
        <div class="item6">
          <label for="jobdisc" class="form-label"
            ><i class="fa-solid fa-tasks"> </i>Study Description</label
          >
          <textarea
            id="jobdisc"
            cols="30"
            rows="10"
            class="form-control"
            v-model="disc"
            @keyup="myStudy"
          ></textarea>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "work-item",
  data() {
    return {
      Hidden: false,
      spec: "IT",
      university: "damascus",
      location: "Syria",
      from: "2020-01-01",
      to: "2022-01-01",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
    };
  },
  methods: {
    myStudy() {
      var n = {
        spec: this.spec,
        in: this.index,
        uni: this.university,
        loc: this.location,
        from: this.from,
        to: this.to,
        disc: this.disc,
      };
      this.$store.commit("settingstudy", n);
      console.log(this.$store.state.study);
    },
    deleteMe() {
      this.$emit("deleteStudy");
    },
  },
  updated() {},
  computed: {},
  props: ["deleteStudy", "index"],
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  align-content: center;
  display: none;
  background-color: #fff;
  grid-gap: 10px;
  margin-bottom: 20px;
}
.open {
  display: grid;
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
.item7 {
  grid-column: 1/3;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
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
.btndelete {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 4px;
  margin-left: 60px;
}
.item1 {
  grid-column: 1/3;
}
.item6 {
  grid-column: 1/3;
}
</style>
