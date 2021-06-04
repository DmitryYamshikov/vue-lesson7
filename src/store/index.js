import { createStore } from "vuex";
import products from './products';
import cart from './cart';

export default createStore({
  modules: {
    products,
    cart
  },
  state: {},
  mutations: {},
  actions: {},
  strict: process.env.NODE_ENV !== 'production'
});
