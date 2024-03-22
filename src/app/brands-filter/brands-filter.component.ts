import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brands-filter',
  templateUrl: './brands-filter.component.html',
  styleUrl: './brands-filter.component.css'
})

export class BrandsFilterComponent {

  brands: string[] = ['Braas', 'Koramic', 'Röben', 'Nelskamp', 'Creaton', 'Erlus']; // Liste der Marken
  selectedBrands: string[] = []; // Ausgewählte Marken

  @Output() filterChanged = new EventEmitter<string[]>(); // Event, das ausgelöst wird, wenn der Filter geändert wird

  constructor() {}
  // Wird aufgerufen, wenn eine Checkbox ausgewählt oder abgewählt wird
  onCheckboxChange(brand: string, event: any) {
    const isChecked = event.target.checked;

    if (isChecked) {
      // Marken zur ausgewählten Liste hinzufügen, wenn Checkbox aktiviert ist
      this.selectedBrands.push(brand);
    } else {
      // Marken aus der ausgewählten Liste entfernen, wenn Checkbox deaktiviert ist
      const index = this.selectedBrands.indexOf(brand);
      if (index >= 0) {
        this.selectedBrands.splice(index, 1);
      }
    }
    // Event auslösen, um den Filter zu aktualisieren
    this.filterChanged.emit(this.selectedBrands);
  }


}
