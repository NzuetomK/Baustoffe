import { Component } from '@angular/core';

@Component({
  selector: 'app-braas-unterkategorien',
  templateUrl: './braas-unterkategorien.component.html',
  styleUrl: './braas-unterkategorien.component.css'
})
export class BraasUnterkategorienComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }
}
