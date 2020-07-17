<template>
    <div>
      <div>{{user.lastName}}</div>
      <div>{{user.firstName}}</div>
      <div>{{user.middleName}}</div>
      <div>{{user.sex}}</div>
      <div>{{user.age}}</div>
    </div>
</template>

<script>

    export default {
        name: 'ProfileInfo',
        components: {},
        data() {
            return {
            }
        },
        computed: {
            user () {
              return this.$store.state.user;
            }
        },
        methods: {

        }
    }
</script>

<style>
    .item-box {
        margin-bottom: 15px;
    }

    .item-box .item-tag {
        margin-bottom: 8px;
        font-size: 15px;
    }

    .item-box input {
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
</style>
