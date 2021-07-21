//vuex
import { createStore } from "vuex";
//modules
import user from "./modules/user"

export default createStore({
  modules: {
    user
  }
});
