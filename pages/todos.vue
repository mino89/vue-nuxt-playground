<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">
                            action
                        </th>
                        <th class="text-left">
                            todo
                        </th>
                        <th class="text-left">
                            remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.text">
                        <td><input :checked="todo.done" type="checkbox" @change="toggle(todo)"></td>
                        <td><span :class="{ done: todo.done }">{{ todo.text }}</span></td>
                        <td>

                            <v-icon @click="remove(todo)">
                                mdi-delete
                            </v-icon>


                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-text-field placeholder="What needs to be done?" @keyup.enter="addTodo"></v-text-field>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    computed: {
        todos() {
            return this.$store.state.todos.list
        }
    },
    methods: {
        addTodo(e) {
            this.$store.commit('todos/add', e.target.value)
            e.target.value = ''
        },
        ...mapMutations({
            toggle: 'todos/toggle',
            remove: 'todos/remove'
        })
    }
}
</script>

<style>
.done {
    text-decoration: line-through;
}
</style>