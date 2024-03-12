import { Component } from '@angular/core';

@Component({
  selector: 'app-schiefer',
  templateUrl: './schiefer.component.html',
  styleUrl: './schiefer.component.css'
})
export class SchieferComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }
}
