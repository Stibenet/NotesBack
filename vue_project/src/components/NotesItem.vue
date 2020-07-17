<template>
    <div>
        <div class="notesItem" v-for="(items, index) in notesData">
            <div class="notesItem-title">Имя {{items.title}}</div>
            <div class="notesItem-executor">Исполнитель:{{items.description}}</div>
        </div>
    </div>
</template>

<script>
    import NotesList from '@/components/NotesList'

    export default {
        name: 'NotesItem',
        components: {
            NotesList
        },
        props: [
            'notesData'
        ]
    }
</script>

<style scoped>
    .notesItem {
        padding: 30px;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        border-radius: 5px;
        background: #fff;
    }

    .notesItem-title {
        font-size: 19px;
        font-weight: bold;
        color: #000;
    }

    .notesItem-executor {
        font-size: 15px;
        color: #778290;
        margin-top: 5px;
    }
</style>
