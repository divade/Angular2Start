import { Component } from '@angular/core';
import {Boutons} from '../navbarComponent/BtnNavBar/BoutonNavBar';
import {BoutonNavBar} from '../navbarComponent/BtnNavBar/navBarTable'

@Component({
  templateUrl: './app/Component/pageDacceuilComponent/pagedacceuil.component.html',
  styleUrls: ['./app/Component/pageDacceuilComponent/pagedacceuil.component.css']
})

export class Acceuil{
  titreAcceuil :string= 'Bienvenue sur Angular 2 Start';
  boutonsComponent = BoutonNavBar;
};
