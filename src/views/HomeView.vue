<template>
  <div>home </div>
  <button @click="go"> 点击去其他页面</button>
</template>

<script>
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = inject('router')
    function go(){
      router.push('/about/er')
    }
     return {
        go
     }
  }
})
</script>
