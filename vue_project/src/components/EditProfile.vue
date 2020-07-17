<template>
  <div>
    <div class="item-box">
      <div class="item-tag">Фамилия</div>
      <input type="text" v-model="user.lastName">
    </div>

    <div class="item-box">
      <div class="item-tag">Имя</div>
      <input type="text" v-model="user.firstName">
    </div>

    <div class="item-box">
      <div class="item-tag">Отчетсво</div>
      <input type="text" v-model="user.middleName">
    </div>

    <div class="item-box">
      <div class="item-tag">Пол</div>
      <input type="text" v-model="user.sex">
    </div>

    <div class="item-box">
      <div class="item-tag">Возраст</div>
      <input type="text" v-model="user.age">
    </div>
  </div>
</template>

<script>


  export default {
    name: 'EditProfile',
    components: {
    },
    data () {
      return {

      }
    },
    computed: {
      user: {
        get() {
          return this.$store.state.user
        },
        set(value) {
          this.$store.commit('updateUser', value)
        }
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
