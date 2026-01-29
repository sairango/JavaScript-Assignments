/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todolist = [];
  }

  add(todo) {
    this.todolist.push(todo);
  }

  remove(indexOfTodo) {
    this.todolist = this.todolist.filter((val, index) =>
      index !== indexOfTodo
    );
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todolist.length) {
      return;
    }
    this.todolist[index] = updatedTodo;
  }

  getAll() {
    return this.todolist;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todolist.length) {
      return null;
    }
    return this.todolist[indexOfTodo]
  }

  clear() {
    this.todolist = [];
  }
}

// let todoList;
// todoList = new Todo();
// todoList.add("Task 1");
// todoList.add("Task 2");
// todoList.add("Task 3");

// console.log(todoList.get(0));
// console.log(todoList.get(2));
// console.log(todoList.get(3));

module.exports = Todo;