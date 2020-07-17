<template>
    <div id="NotesList">
        <!--<div class="notes_add_box">
            <form @submit.prevent="formNotes">
                <input type="text" placeholder="Введите название задачи">
                <select name="">
                    <option value="Выберите исполнителя">Выберите исполнителя</option>
                    <option value="noteItem.executor" v-for="noteItem in notesData_bind">{{noteItem.executor}}</option>
                </select>
                <button class="addBtn">Создать задачу</button>
            </form>
        </div>-->

        <NotesItem :notesData="notesData"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import NotesItem from '@/components/NotesItem'

    export default {
        name: 'NotesList',
        components: {
            NotesItem
        },
        data() {
            return {
                notesData: [
                    {
                        // userId: '',
                        id: '',
                        title : '',
                        description : '',
                    }
                ]
            }
        },

        mounted() {
            axios
                .get('http://127.0.0.1:8000/api/notes')
                .then(response => (this.notesData = response.data));
        }
    }
</script>

<style scoped>
    .notesList {
        margin-top: 30px;
    }

    .notes_add_box form {
        display: flex;
        flex-wrap: wrap;
    }

    .notes_add_box input {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color: #000;
        width: 30%;
        margin-right: 20px;
        font-size: 16px;
    }

    .notes_add_box select {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color: #000;
        width: 20%;
        margin-right: 20px;
        font-size: 16px;
    }

    .addBtn {
        padding: 10px 20px;
        background: #1E51BA;
        color: #fff;
        border-radius: 5px;
        border: 0;
        font-size: 16px;
    }

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
