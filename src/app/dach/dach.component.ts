import { Component } from '@angular/core';

@Component({
  selector: 'app-dach',
  templateUrl: './dach.component.html',
  styleUrl: './dach.component.css'
})
export class DachComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }

}
