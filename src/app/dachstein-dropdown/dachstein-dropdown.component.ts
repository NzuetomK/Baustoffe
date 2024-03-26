import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dachstein-dropdown',
  templateUrl: './dachstein-dropdown.component.html',
  styleUrl: './dachstein-dropdown.component.css'
})
export class DachsteinDropdownComponent {
  @Input() searchTerm!: string;
  showDropdown: boolean = false;
  dropdownOptions: any[] = []; // Hier sollten Ihre Dropdown-Optionen sein

  ngOnInit(): void  {

    if (this.searchTerm && this.searchTerm.toLowerCase() === 'dachsteine') {
      // Wenn ja, zeigen Sie das Dropdown-Menü an und setzen Sie die Dropdown-Optionen
      this.showDropdown = true;
      this.dropdownOptions = ['Braas Taunus Pfanne', 'Nelskamp Hinkenberger Pfanne']; // Fügen Sie hier weitere Optionen hinzu
    } else {
      // Andernfalls verstecken Sie das Dropdown-Menü
      this.showDropdown = false;
      this.dropdownOptions = []; // Setzen Sie die Optionen zurück
    }
  }


}
