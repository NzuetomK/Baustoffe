import { Component } from '@angular/core';

@Component({
  selector: 'app-dachfenster',
  templateUrl: './dachfenster.component.html',
  styleUrl: './dachfenster.component.css'
})
export class DachfensterComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }
}
