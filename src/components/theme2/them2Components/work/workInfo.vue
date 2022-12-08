<template>
  <div class="container" v-if="myjob[0]">
    <h3 class="experience-title">EXPERIENCE</h3>

    <div class="experience-wrapper">
      <div v-for="job in myjob" :key="job">
        <div v-if="job">
          <div class="company-wrapper clearfix">
            <div class="experience-title">{{ job["jobtitle"] }}</div>
            <div class="experience-title">{{ job["location"] }}</div>
            <!-- NAME OF THE COMPANY YOUWORK WITH  -->
            <div class="time">
              {{ job["from"].substring(0, 7) }} -
              {{ job["to"].substring(0, 7) }}
            </div>
            <!-- THE TIME YOU WORK WITH THE COMPANY  -->
          </div>

          <div class="job-wrapper clearfix">
            <div class="experience-title">
              {{ job["company"] }}
            </div>
            <!-- JOB TITLE  -->
            <div class="company-description">
              <p>
                {{ job["disc"] }}
              </p>
              <!-- JOB DESCRIPTION  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-info",
  data() {
    return {};
  },
  computed: {
    myjob() {
      console.log(this.$store.state.jobs);
      return this.$store.state.jobs;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
