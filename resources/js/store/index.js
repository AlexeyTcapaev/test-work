import Vue from "vue";
import Vuex from "vuex";
import table from "./table";
import form from "./form";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        table,
        form
    }
});