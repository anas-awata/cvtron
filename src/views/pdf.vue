<template>
  <!-- <iframe id="frame" :src="d()" name="my-iframe" /> -->
  <div class="row">
    <div class="cvinput col-md-4 col-sm-12">
      <div v-if="!isMobile">
        <design-color />
      </div>
      <selector />
      <work-selector />
      <study-selector />
      <skills-Selector />
    </div>
    <div v-if="!isMobile" ref="printMe" id="content" class="col-md-8 col-sm-12">
      <theme-2 />
      <!-- SOURCE -->
    </div>
  </div>
  <div>
    <button @click="DownloadPdf" class="btn btn-success">
      Download PDF <i class="fa-solid fa-download"> </i>
    </button>
  </div>
  <!-- OUTPUT -->
  <div class="pdf-section">
    <img id="content-image" :src="output" />
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import * as html2canvas from "html2canvas";
import $ from "jquery";
//import mycontent from "./content.vue";
import theme2 from "../components/them2/theme2.vue";
import selector from "../components/cvSelectors/personalSelector.vue";
import workSelector from "../components/cvSelectors/workSelector.vue";
import studySelector from "../components/cvSelectors/studySelector.vue";
import skillsSelector from "../components/cvSelectors/skillsSelector.vue";
import designColor from "../components/cvSelectors/designColor.vue";
export default {
  name: "my-pdf",
  data() {
    return { doc: null, f: "", output: null, el: null };
  },
  methods: {
    async print() {
      this.doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
        hotfixes: ["px_scaling"],
      });

      this.el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.

      /* this.output = await this.$html2canvas(this.el, {
        type: "dataURL",
        useCORS: true,
        onclone: function (cl) {
          $(cl).find("#content").css("display", "block");
        },
      });*/
      html2canvas(this.el, {
        onclone: function (cl) {
          $(cl).find("#content").css("display", "block");
          $(cl).find("#content").css("width", "100%");
          $(cl).find("#content").css("height", "100%");
        },
      }).then((canvas) => {
        canvas.mozImageSmoothingEnabled = false;
        canvas.webkitImageSmoothingEnabled = false;
        canvas.msImageSmoothingEnabled = false;
        canvas.ImageSmoothingEnabled = false;
        this.output = canvas.toDataURL("image/png", 1);
      });
    },
    DownloadPdf() {
      this.print();

      setTimeout(() => {
        this.doc.addImage(
          this.output,
          "PNG",
          0,
          0,
          this.doc.internal.pageSize.getWidth(),
          this.doc.internal.pageSize.getHeight()
        );

        this.doc.save("a.pdf");
      }, 2000);

      // this.doc.text(this.text, 10, 10);
      // window.open(this.doc.output("bloburl"), "_blank", "width=200,height=100");
      // return this.doc.output("bloburl");

      /*  html2canvas(this.$refs.foo, {
        width: this.doc.internal.pageSize.getWidth(),
        height: this.doc.internal.pageSize.getHeight(),
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        this.doc.addImage(
          img,
          "png",
          140,
          10
          //  this.doc.internal.pageSize.getWidth(),
          //  this.doc.internal.getHeight()
        );
      });
      this.doc.save("a4.pdf");*/
      /*  html2canvas(this.$refs.foo, {
        onrendered: function (canvas) {
          var pagedata = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF("", "pt", "a4");
          pdf.addImage(
            pagedata,
            "JPEG",
            0,
            0,
            595.28,
            (592.28 / canvas.width) * canvas.height
          );
          pdf.save("f.pdf");
        },
      });*/
    },
  },
  mounted() {
    this.print();
  },
  updated() {
    this.print();
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
  components: {
    theme2,
    selector,
    workSelector,
    studySelector,
    skillsSelector,
    designColor,
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
  height: 842px;
}
#content-image {
  width: 600px;
  height: 600px;
  display: none;
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
    margin-left: 10%;
  }
}
@media (max-width: 768px) {
  .cvinput {
    margin-top: 12%;
  }
  .profile {
    border-left-style: none;
  }
}
</style>
