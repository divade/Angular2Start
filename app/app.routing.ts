import {Routes, RouterModule} from '@angular/router';

import {Acceuil} from './Component/pageDacceuilComponent/pagedacceuil.component';
import {petitModuleComponent} from './Component/petitmoduleComponent/petitmodule.component';
import {CarrouselComponent} from './Component/carrouselComponent/carrousel.component';
import {todoListComponent} from './Component/todolistComponent/todolist.component';
import {todoListStylebindingComponent} from './Component/todolistStylebindingComponent/todolist.stylebinding.component';
import {ngstyleComponent} from './Component/ngStyleComponent/ngstyle.component';
import{ngifComponent} from './Component/ngIfComponent/ngif.component';
import {currencyPipeComponent} from './Component/currencypipeComponent/currencypipe.component';
import {datePipeComponent} from './Component/datePipeComponent/datePipe.component';
import {taskManagerComponent} from './Component/taskManagerComponent/taskmanager.component';


const appRoutes : Routes = [
{
  path:'',
  redirectTo: 'Acceuil',
  pathMatch: 'full'
},{
  path:'Acceuil',
  component: Acceuil
},
{
  path:'smallModule',
  component: petitModuleComponent,
},
{
  path: 'Carousel',
  component: CarrouselComponent
},
{
  path: 'todoList',
  component: todoListComponent
},
{
  path: 'todoliststylebinding',
  component: todoListStylebindingComponent
},
{
  path: 'ngstyle',
  component:ngstyleComponent
},
{
  path: 'ngif',
  component:ngifComponent
},
{
  path: 'currencypipe',
  component:currencyPipeComponent
},
{
  path: 'datePipe',
  component : datePipeComponent
},
{
  path: 'taskManager',
  component : taskManagerComponent
}
]

export const routing = RouterModule.forRoot(appRoutes);
