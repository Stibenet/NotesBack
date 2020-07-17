<template>
  <div id="app">
    <userName />
    <router-link to="/profile/">Перейти в профиль</router-link>

  </div>
</template>


<script>
  import userName from "@/components/User"

  export default {
    name:'home',
    components: {
      userName
    },
    data(){
      return{

      }
    },
    created() {
      this.getUser();
    },
    methods:{
      getUser(){
        this.items[0].name = 'Иван';
      },
    },
    watch:{

    }
  }
</script>
