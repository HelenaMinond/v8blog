import Vue from 'vue'
import Router from 'vue-router'
//import Raiz from './components/Raiz'
import Home from './components/Home'
import Portada from './components/Portada'
import Inicio from './components/Inicio'
//import SobreMi from './components/SobreMi'
//import Contacto from './components/Contacto'
//import Post from './components/Post'
//import Articulo from './components/Articulo'
import Administrador from './components/Administrador'
import NotFound from './components/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'raiz',
            //component: Raiz,
            component: () => import(/* webpackChunkName: "raiz" */ "./components/Raiz.vue")
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/'
        },
        {
            path: '/portada',
            name: 'portada',
            component: Portada,
            redirect: '/'
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: Inicio,
            redirect: '/'
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            //component: SobreMi,
            component: () => import(/* webpackChunkName: "raiz" */ "./components/SobreMi.vue"),
            alias: '/acerca'
        },
        {
            path: '/contacto',
            name: 'contacto',
            //component: Contacto,
            component: () => import(/* webpackChunkName: "raiz" */ "./components/Contacto.vue"),
            alias: '/contactame'
        },
        {
            path: '/post',
            name: 'post',
            //component: Post,
            component: () => import(/* webpackChunkName: "raiz" */ "./components/Post.vue"),
            children: [
                {
                    path: ':articulo',
                    //component: Articulo,
                    component: () => import(/* webpackChunkName: "raiz" */ "./components/Articulo.vue")
                }
            ]
        },
        {
            path: '/administrador/:tipo',
            name: 'administrador',
            component: Administrador,
            props: true
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})