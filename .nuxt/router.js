import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c0e3130 = () => interopDefault(import('..\\pages\\AddPost.vue' /* webpackChunkName: "pages/AddPost" */))
const _f05f5cd0 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _66b89902 = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages/posts" */))
const _5fa1bbd0 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _eccf7f78 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _752eba9a = () => interopDefault(import('..\\pages\\postpage\\_id.vue' /* webpackChunkName: "pages/postpage/_id" */))
const _83aea2fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AddPost",
    component: _1c0e3130,
    name: "AddPost"
  }, {
    path: "/login",
    component: _f05f5cd0,
    name: "login"
  }, {
    path: "/posts",
    component: _66b89902,
    name: "posts"
  }, {
    path: "/profile",
    component: _5fa1bbd0,
    name: "profile"
  }, {
    path: "/register",
    component: _eccf7f78,
    name: "register"
  }, {
    path: "/postpage/:id?",
    component: _752eba9a,
    name: "postpage-id"
  }, {
    path: "/",
    component: _83aea2fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
