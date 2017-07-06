import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {Acceuil} from './Component/pageDacceuilComponent/pagedacceuil.component';
import {CarrouselComponent} from './Component/carrouselComponent/carrousel.component';
import {petitModuleComponent} from './Component/petitmoduleComponent/petitmodule.component';
import {todoListComponent} from './Component/todolistComponent/todolist.component';
import{todoListStylebindingComponent} from './Component/todolistStylebindingComponent/todolist.stylebinding.component';
import {ngstyleComponent} from './Component/ngStyleComponent/ngstyle.component';
import{ngifComponent} from './Component/ngIfComponent/ngif.component';
import {currencyPipeComponent} from './Component/currencypipeComponent/currencypipe.component';
import {datePipeComponent} from './Component/datePipeComponent/datePipe.component';
import {taskManagerComponent} from './Component/taskManagerComponent/taskmanager.component';
import {AppFormulaireComponent} from './Component/taskManagerComponent/formulaireComponent/formulaire.component';
import {AppTableComponent} from './Component/taskManagerComponent/tableComponent/table.component';
import { AppComponent }  from './app.component';
import{routing} from './app.routing';


@NgModule({
  imports: [ BrowserModule, FormsModule,routing ],
  declarations: [
     AppComponent,
     CarrouselComponent,
     petitModuleComponent,
     todoListComponent,
     Acceuil,
     todoListStylebindingComponent,
     ngstyleComponent,
     ngifComponent,
     currencyPipeComponent,
     datePipeComponent,
     taskManagerComponent,
     AppFormulaireComponent,
     AppTableComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
