import { createRouter, createWebHistory } from 'vue-router'

import Product from './components/Product';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import E404 from './components/E404';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'catalog',
      path: '/',
      component: ProductsList
    },
    {
      name: 'product',
      path: '/catalog/:id',
      component: Product
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'order',
      path: '/checkout',
      component: Checkout
    },
    {
      path: '/:nz(.*)',
      component: E404
    }
  ]
});

export default router;