import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// import components
import Index from './components/pages/Index.vue'
import Shop from './components/pages/Shop.vue'
import ShopCart from './components/pages/ShopCart'
import Error404 from './components/pages/404.vue'
import LogReg from './components/pages/LoginRegister.vue'
import About from './components/pages/About.vue'
import Product from './components/pages/Product.vue'
import Contact from './components/pages/Contact.vue'
import Panel from './components/pages/Panel.vue'

// imports panels childeren components
import PanelProducts from './components/layout/panel/Products.vue'
import PanelCreateProduct from './components/layout/panel/CreateProduct.vue'
import PanelUsers from './components/layout/panel/Users.vue'

const routes = [
    {
        path : '/panel',
        name : 'panel',
        component : Panel,
        children : [
            {
                path : 'products',
                component : PanelProducts
            },
            {
                path : 'create-product/:id',
                name : 'edite',
                component : PanelCreateProduct
            },
            {
                path : 'users',
                component : PanelUsers
            },
        ]
    },
    {
        path : '/',
        alias : '/home',
        name : 'Home',
        component : Index
    },
    {
        path : '/shop',
        name : 'shop',
        component : Shop
    },
    {
        path : '/shop-cart',
        name : 'cart',
        component: ShopCart
    },
    {
        path : '/about',
        name : 'about',
        component : About
    },
    {
        path : '/contact',
        name : 'contact',
        component : Contact
    },
    {
        path : '/product/:id',
        name : 'product',
        component : Product
    },
    {
        path : '/user/:location',
        name : 'signin/up',
        component : LogReg
    },
    {
        path : '/*',
        name : '404',
        component : Error404
    },
];

export default new VueRouter({
    routes,
    scrollBehavior() {
        return {
            x : 0,
            y : 0
        }
    }
});