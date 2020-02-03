Vue.component('todo-item', {
    props: ['todo', 'now'],
    template: `<li>{{ todo.text }} <button v-on:click="$emit('remove')">Remove</button></li>`
});

var vm = new Vue({
    el: '#app-todo',
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ],
        nextTodoId: 4,
        error: null
    },
    computed: {
      now: function () {
        return Date.now()
      }
    },
    methods: {
        addNewTodo: function() {
            this.groceryList.push({
                id: this.nextTodoId++,
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});