import {Todo} from './todo';

export const TODOS: Todo [] = [
  {texte: 'aller chez le medecin', desc: 'detartrage et radio', date : new Date(2016, 8, 29), estFait: false, priority: 'faible'},
  {texte: 'appeler Medark', desc: 'invitation biere', date: new Date(2016,10,19), estFait : false, priority:'haute'},
  {texte: 'payer facture', desc: '20 euros', date: new Date(2016,8,22), estFait : false, priority:'haute'},
  {texte: 'faire les courses', desc: 'acheter pq', date: new Date(2016,3,10), estFait : false, priority:'moyenne'}
]
