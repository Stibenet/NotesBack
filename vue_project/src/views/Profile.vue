<template>
  <div id="app">
    <div class="menu">
      <router-link class="menu-item" to="/profile/">Мой профиль</router-link>
      <router-link class="menu-item" to="/profile/edit/">Редактировать данные</router-link>
      <router-link class="menu-item" to="/profile/message/">Сообщения</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>

<style>

</style>
