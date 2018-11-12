import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    notification: {
      namespaced: true,
      state: {
        notifyMsg: String,
        errorNotifyMsg: String,
      },
      actions: {
        setMessage({ commit }, { message, messageState }) {
          if (messageState) {
            commit('setMessage', message);
          } else {
            commit('setErrorMessage', message);
          }
        },
        creaMessage({ commit }, messageState) {
          if (messageState) {
            commit('creaNotifyMsg');
          } else {
            commit('creaErrorNotifyMsg');
          }
        },
      },
      mutations: {
        setMessage(state, message) {
          const st = state;
          st.notifyMsg = message;
        },
        setErrorMessage(state, message) {
          const st = state;
          st.errorNotifyMsg = message;
        },
        creaNotifyMsg(state) {
          const st = state;
          st.notifyMsg = '';
        },
        creaErrorNotifyMsg(state) {
          const st = state;
          st.errorNotifyMsg = '';
        },
      },
      getters: {
        notifyMsg(state) {
          const st = state;
          return st.notifyMsg;
        },
        errorNotifyMsg(state) {
          const st = state;
          return st.errorNotifyMsg;
        },
      },
    },
  },
});

export default store;
