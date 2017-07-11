import { Component } from '@angular/core';

@Component({
  selector: 'textChange',
  templateUrl: './app/Component/petitmoduleComponent/textChange/textChange.html'
})

export class textChange {
  texte :string= 'Clique sur le bouton pour changer le texte';
  onTextChange= () => { this.texte = 'Tu as change le texte'};
}
