import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
//import vueiframe, { VueIframe } from "vue-iframes";
//import { html2canvas } from "html2canvas";
import "./css/global.css";
//import vueHtml2canvas from "vue-html2canvas";
import "@babel/polyfill";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
library.add(fas, fab);
dom.watch();
import mitt from "mitt";
const emitter = mitt();

import { createStore } from "vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      personal: {},
      social: {},
      jobs: {},
      study: {},
      skills: [],
      languages: [],
      headingsColor: "",
      cvColors: [],
    };
  },
  mutations: {
    settingpersonal(state, payload) {
      state.personal = {
        Fname: payload.Fname,
        Lname: payload.Lname,
        Jtitle: payload.Jtitle,
        Email: payload.Email,
        Phone: payload.Phone,
        Address: payload.Address,
        About: payload.About,
      };
    },
    settingsocial(state, payload) {
      state.social = {
        LinkedIn: payload.LinkedIn,
        Twitter: payload.Twitter,
        Instagram: payload.Instagram,
        Facebook: payload.Facebook,
        Github: payload.Github,
      };
    },
    settingjob(state, payload) {
      state.jobs[payload.in] = {
        title: payload.jb,
        company: payload.comp,
        location: payload.loc,
        from: payload.from,
        to: payload.to,
        disc: payload.disc,
      };
    },
    settingstudy(state, payload) {
      state.study[payload.in] = {
        spec: payload.spec,
        uni: payload.uni,
        location: payload.loc,
        from: payload.from,
        to: payload.to,
        disc: payload.disc,
      };
    },
    settingskills(state, payload) {
      state.skills = payload;
    },
    settinglanguages(state, payload) {
      state.languages = payload;
    },
    settingheadingcolor(state, payload) {
      state.headingColor = payload;
    },
    settingcvcolors(state, payload) {
      state.cvColors[0] = payload.firstcolor;
      state.cvColors[1] = payload.secondcolor;
    },
  },
});

const app = createApp(App).use(router).use(store);
app.component("font-awesome-icon", fontAwesomeIcon);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
