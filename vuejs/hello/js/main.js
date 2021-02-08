var vm = new Vue({
    el: "#app",
    data: {
        newItem: '',
        todos: [],
    },
    methods: {
        addItem: function () {
            if (this.newItem == '') return;

            var todo = {
                item: this.newItem,
                isDown: false
            };
            this.todos.push(todo);
            this.newItem = '';
        }
    }
})