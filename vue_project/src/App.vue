<template>
    <div id="app">
        <NotesList/>
    </div>
</template>


<script>
    import NotesList from '@/components/NotesList'

    export default {
        name: 'App',
        data() {
            return {

            }
        },
        components: {
            NotesList
        },
        /*created() {
            this.getUser(user);
        },*/

    }
</script>

<style>
    body {
        background: #f4f7fb;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 50px;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .content {
        margin: 40px auto;
    }

    .menu-item {
        display: inline-block;
        margin-right: 15px;
        color: #1E51BA;
        border-bottom: 1px solid rgba(30, 80, 186, 0.4);
        text-decoration: none;
        padding-bottom: 3px;
    }

    .menu-item.router-link-exact-active {
        border-bottom: 0;
        color: #000;
    }
</style>
