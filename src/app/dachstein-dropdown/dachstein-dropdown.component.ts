import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dachstein-dropdown',
  templateUrl: './dachstein-dropdown.component.html',
  styleUrl: './dachstein-dropdown.component.css'
})
export class DachsteinDropdownComponent {
  @Output() dropdownTriggered: EventEmitter<void> = new EventEmitter<void>();
  @Output() filterItemsEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchTriggered: EventEmitter<void> = new EventEmitter<void>();
  @Output() searchTermEvent: EventEmitter<string> = new EventEmitter<string>();


  showDropdown: boolean = false;
  dropdownOptions: string[] = ['Braas Taunus Pfanne', 'Braas Tegalit Aerlox', 'Braas Frankfurter Pfanne', 'Braas Doppel-S']; // Dropdown-Optionen

  private search(searchTerm: string): void {
    if(searchTerm && searchTerm.toLowerCase().includes('betonziegel')){
      this.showDropdown = true;
    }
    else{
        this.showDropdown = false;
        this.searchTermEvent.emit(searchTerm);
      }


    // Überprüfen, ob searchTerm 'Betonziegel' enthält (unabhängig von Groß- und Kleinschreibung)
    // if (this.searchTerm && this.searchTerm.toLowerCase().includes('betonziegel')) {
      // Wenn ja, Dropdown-Menü anzeigen
    //   this.showDropdown = true;
    // } else {
      // Andernfalls Dropdown-Menü ausblenden
    //   this.showDropdown = false;
    //   this.searchTriggered.emit();
    // }
  }

  // Methode zum Behandeln der Eingabeänderungen im Suchfeld
  onSearchInputChange(event: any) {
    console.log(event.target.value);

    this.search(event.target.value);
  }

  onItemClick(item: string) {
    console.log('Selected Item:', item);
    // Dropdown ausblenden, wenn ein Element ausgewählt wird
    this.showDropdown = false;
  }

   // Methode, die aufgerufen wird, wenn das Dropdown-Menü ausgelöst werden soll
   triggerFilterItems() {
    this.filterItemsEvent.emit();
  }

   // Methode, die aufgerufen wird, wenn das Dropdown-Menü ausgelöst wird
   triggerDropdown() {
    this.dropdownTriggered.emit();
  }
}
