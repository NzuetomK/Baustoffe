import { Component } from '@angular/core';

@Component({
  selector: 'app-ziegel',
  templateUrl: './ziegel.component.html',
  styleUrl: './ziegel.component.css'
})
export class ZiegelComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
  }
}
