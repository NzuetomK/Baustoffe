import { Component } from '@angular/core';

@Component({
  selector: 'app-dachdaemmung',
  templateUrl: './dachdaemmung.component.html',
  styleUrl: './dachdaemmung.component.css'
})
export class DachdaemmungComponent {
  produktClicked() {
    console.log('Produkt wurde geklickt');
    // Fügen Sie hier die gewünschte Aktion hinzu
  }
}
