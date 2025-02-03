import Vue from 'vue';
import Vuex from 'vuex';
import { catalog } from 'store/catalog';
import { cart } from 'store/cart';

Vue.use(Vuex);

export default new Vuex.Store({
    state: (): never => ({} as never),
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        catalog,
        cart,
    },
});
