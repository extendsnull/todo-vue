let initialID = Date.now();

const getID = () => {
  return ++initialID;
};

const createTodoItem = description => ({
  id: getID(),
  description,
});

const vm = new Vue({
  el: '#app',
  data: {
    description: '',
    todoItems: [
      createTodoItem('Изучить Vue.js'),
      createTodoItem('Приготовить обед'),
      createTodoItem('Поиграть с кошкой'),
    ],
  },
  methods: {
    onChangeField() {
      this.description = this.description.trimStart();
    },
    resetDescriptionField() {
      this.description = '';
    },
    addTodoItem() {
      const newTodoItem = createTodoItem(this.description);
      this.todoItems.push(newTodoItem);
      this.resetDescriptionField();
    }
  }
});