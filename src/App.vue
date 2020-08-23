<template>
  <div id="app">
    <div id="wrapper" class="wrapper clearfix">
      <my-header></my-header>
      <router-view></router-view>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    'my-header' : Header,
    'my-footer' : Footer,
  },
}
</script>