import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// 这个文件存放了我们的状态
const state = {
    count: 10
};
const getters = {
    // 状态的计算
    count(state) {
        return state.count + 10
    }
};
const mutations = {
    addCount(state,n) {
        return state.count += n
    }
};
const actions = {
    addCount({commit},n) {
        commit('addCount',n)
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})