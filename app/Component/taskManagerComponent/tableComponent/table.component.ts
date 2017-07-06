import {Component} from '@angular/core';
import {Todo} from '../Todo/todo';
import {TODOS} from '../Todo/todos';

@Component({
  selector : 'table-todo',
  templateUrl : './app/Component/taskManagerComponent/tableComponent/table.component.html',
  styleUrls:['./app/Component/taskManagerComponent/tableComponent/table.component.css']
})



export class AppTableComponent{
todos = TODOS;
todoSelectionne:Todo;

setClasses(todo: Todo){
  let classes = {
    faible : todo.priority == "faible",
    moyenne : todo.priority == "moyenne",
    haute: todo.priority == 'haute'
  };
  return classes
}
  OnSelected(todo:Todo){
      this.todoSelectionne = todo;
  }
}
