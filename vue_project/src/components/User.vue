<template>
    <span>
        <h1>Привет, {{ userName }}!</h1>
    </span>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
        userName: 'Коля'
      }
    }
  }
</script>
