import { Component } from '@angular/core';

@Component({
  selector: 'app-dachbahnen',
  templateUrl: './dachbahnen.component.html',
  styleUrl: './dachbahnen.component.css'
})
export class DachbahnenComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }
}
