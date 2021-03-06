import {Component} from '@angular/core';
import {Todo} from '../Todo/todo';
import {TODOS} from '../Todo/todos';

@Component({
  selector : 'formulaire-todo',
  templateUrl : './app/Component/taskManagerComponent/formulaireComponent/formulaire.component.html',
})



export class AppFormulaireComponent{

todos = TODOS;
priorities : string [] = ['faible', 'moyenne', 'haute'];
priority = 'faible' //valeur faible par default
  ajouterTodo(texte:string, desc:string, date: Date, priority:string){
    let nouveauTodo = {texte:texte, desc:desc, date:date, estFait: false, priority:'faible' }
    this.todos.push(nouveauTodo)    }
}
