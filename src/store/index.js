import Vue from 'vue'
import Vuex from 'vuex'
import { Api } from "../utils/http-common";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: false,
    success: false,
    message: "",
    error: false,
  },
  getters: {
    status: (state) => state.status,
    success: (state) => state.success,
    message: (state) => state.message,
    error: (state) => state.error,
  },
  mutations: {
    // Setters
    set(state, [variable, value]) {
      state[variable] = value
    },
  },
  actions: {

    registerForm({ commit }, formData) {
      Api.requestServer1
        .post(`/v3/account/`, formData)
        .then((response) => {
          const { data } = response;
          if (data.code === 201) {
            commit("set", ["message", data.message]);
            commit("set", ["success", true]);
          } else {
            commit("set", ["message", data.error]);
            commit("set", ["error", true]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
})
