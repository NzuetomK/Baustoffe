import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SearchService } from '../search.service';
import { QuantityService } from '../quantity.service';
import { Subscription } from 'rxjs';

interface Baustoffhändler {
  logo: string;
  adress: string;
  product_name: string;
  product_name2: string;
  product_name3: string;
  name:string;
  radius: number;
  adress_2: string;

};

interface Handwerker {
  logo: string;
  adress: string;
  product_name: string;
  radius: number;
  adress_2: string;
  product_name2: string;
  product_name3: string;
  name: string;

};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();
  public inputSearchTerm: string = '';

  handwerkerSearchInput(event: Event): void {
    this.searchHandwerker = (event.target as HTMLInputElement).value;
    this.searchService.setSearchHandwerker(this.searchHandwerker);
  }

  baustoffhaendlerSearchInput(event: Event): void {
    this.searchBaustoffhaendler = (event.target as HTMLInputElement).value;
    this.searchService.setSearchBaustoffhaendler(this.searchBaustoffhaendler);
  }

  items: Baustoffhändler[];
  handwerker: Handwerker[];
  menus: MenuItem[];
  searchTerm: string = '';
  searchHandwerker: string = '';
  searchBaustoffhaendler: string = '';
  searchTerm2: string = '';
  filteredItems: Baustoffhändler[];
  filteredHandwerker: Handwerker[] = [];
  filteredBaustoffhändler: Handwerker[] = [];
  showAdvertising: boolean = true;
  selectedRadius: number = 0;
  selectedQuantity: number = 0;
  private quantitySubscription: Subscription = new Subscription;
  dachsteinOptions: string[] = ["Braas Taunuspfanne", "Nelskamp Hinkenberger Pfanne"];
  showDropdown: boolean = false;
  dropdownOptions: any[] = []; // Hier sollten Ihre Dropdown-Optionen sein
  selectedProduct: string = '';

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log('Dropdown is currently:', this.showDropdown ? 'visible' : 'hidden');
  }

  selectOption(selectedValue: any) {
    console.log('Selected value:', selectedValue);
    // Führen Sie hier Ihre weiteren Aktionen basierend auf dem ausgewählten Wert aus
  }


  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
    // Überprüfen Sie, ob der Suchbegriff "Dachsteine" ist
  }



  public constructor(private router: Router, private searchService: SearchService, private quantityService: QuantityService, private cdr: ChangeDetectorRef){
    this.items = [
      {logo: "assets/images/thxxx.jpg", adress:"Eisenberg", product_name:"Superglass Dachboden- 1200x625 mm", name: "Köbig", radius:0, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      {logo: "assets/images/thxx.jpg", adress:"Bad Kreuznach", product_name:"Superglass Dachboden- 1200x625 mm", name: "Beinbrech", radius:56.4, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      {logo: "assets/images/thx.jpg", adress:"Kaiserslautern", product_name:"Superglass Dachboden- 1200x625 mm", name: "Union Baustoff", radius:58, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      {logo: "assets/images/raab-karcher-logo.jpg", adress:"Kaiserslautern", product_name:"Dachboden-Dämmplatte- 1200x625 mm", name: "Raab Karcher", radius:58, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      // {logo: "https://tse3.mm.bing.net/th?id=OIP.Pu0cINY7aE6E4ktOifuE4gAAAA&pid=Api&P=0&h=180", adress:"Paderborn", product_name:"Superglass Dachboden- 1200x625 mm", name: "Omlor", radius:60, adress_2:"Badlipspringe", product_name2:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      // {logo: "https://tse1.mm.bing.net/th?id=OIP.T2M-QX2IVRXBsUiQsMXUhAAAAA&pid=Api&P=0&h=180", adress:"Hirschhorn", product_name:"Superglass Dachboden- 1200x625 mm", name: "Mannweiler", radius:25, adress_2:"Kaiserslautern", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      // {logo: "https://tse3.mm.bing.net/th?id=OIP.udcFmVsQ9i-KGAnol8DqWAHaDx&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Superglass Dachboden- 1200x625 mm", name: "Reca", radius:20, adress_2:"Saarbrücken", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe"}
    ];
    this.handwerker = [
      {logo: "assets/images/malerBetrieb.PNG", adress:"Eisenberg", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:0, adress_2:"Eisenberg", product_name2:"xx", product_name3:"Ortgangziegel", name:"Cal Maler Betrieb"},
      {logo: "assets/images/Logo_Bornschein_2020.png", adress:"Bad Kreuznach", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:56.4, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe", name:"Projektbau"},
      {logo: "assets/images/thz.jpg", adress:"Rockenhausen", product_name:"Superglass Dachboden- 1200x625 mm", radius:25.9, adress_2:"Eisenberg", product_name2:"Betonziegel",product_name3:"Ortgangziegel links Linea Klassik Engobe", name:"Meisterbau und Dach"},
      {logo: "assets/images/logo-png.png", adress:"Winnweiler", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:24.3, adress_2:"Eisenberg", product_name2:"Betonziegel", product_name3:"Organtziegel", name:"Daba Dach"},
      {logo: "assets/images/Ferocon Bauunternehmen.jpg", adress:"Kaiserslautern", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:58, adress_2:"Eisenberg", product_name2:"Ortgangziegel", product_name3:"Ortgangziegel links Falzziegel Engobe", name:"Fero Bau"},
      // {logo: "https://tse3.mm.bing.net/th?id=OIP.d3hvWtPLnkqDdA-U-SZkEAAAAA&pid=Api&P=0&h=180", adress:"Römerberg", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:48.3, adress_2:"Kaiserslautern", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe", name:"Handwerker 2.0"},
      // {logo: "https://tse2.mm.bing.net/th?id=OIP._7C9TCoWvHSRUO6qYcDevAAAAA&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:20, adress_2:"Saarbrücken", product_name2:"Betonziegel", product_name3:"Ortgangziegel links Falzziegel Engobe", name:"WSA"}
    ];
    this.menus = [];
    this.filteredItems = this.items;
    this.filteredHandwerker = this.handwerker;

    this.quantityService.selectedQuantity$.subscribe(quantity => {
      this.selectedQuantity = quantity;
      // Manuell das Change Detection auslösen, um die Ansicht zu aktualisieren
      this.cdr.detectChanges();
    });

  }

  public inputValueChanged(inputValue: string): void {
    this.inputSearchTerm = inputValue;
    console.log("In Header", this.inputSearchTerm);
    this.filterItems();


  }

  onDropdownChange(event: any): void {
    const selectedOption = event?.value;
    if (selectedOption) {
      // Hier können Sie die ausgewählte Option weiter verarbeiten
      console.log('Ausgewählte Option:', selectedOption);
    }
  }


onSearchKeyup(event: any) {
  if (this.searchTerm.toLowerCase().includes('dachsteine')) {
    console.log('Suchbegriff enthält "Dachsteine". Dropdown-Menü wird angezeigt.');
    this.showDropdown = true;
  } else {
    console.log('Suchbegriff enthält keine "Dachsteine". Dropdown-Menü wird ausgeblendet.');
    this.showDropdown = false;
  }
}



  filterItems(): void {
    if (this.inputSearchTerm.trim() !== '') {
      // Filtern Sie Baustoffhändler
      this.filteredItems = this.items.filter(item =>
        item.product_name.toLowerCase().includes(this.inputSearchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(this.inputSearchTerm.toLowerCase()) ||
        item.product_name2.toLowerCase().includes(this.inputSearchTerm.toLowerCase())
      );

      // Filtern Sie Handwerker
      this.filteredHandwerker = this.handwerker.filter(handwerker =>
        handwerker.product_name.toLowerCase().includes(this.inputSearchTerm.toLowerCase()) ||
        handwerker.name.toLowerCase().includes(this.inputSearchTerm.toLowerCase()) ||
        handwerker.product_name2.toLowerCase().includes(this.inputSearchTerm.toLowerCase())

      );

      // Log-Ausgabe für die gefilterten Baustoffhändler
      console.log('Filtered Items:', this.filteredItems);

    } else {
      // Wenn der Benutzer nichts eingegeben hat, filtern Sie nach der Adresse "Kaiserslautern"
      this.filteredItems = this.items.filter(item =>
        item.adress.toLowerCase().includes(''.toLowerCase())
      );

      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.adress.toLowerCase().includes(''.toLowerCase())
      );
    }
  }



  filterHandwerker(): void {
    if (this.searchHandwerker.trim() !== '') {

      // Filtern Sie Handwerker nur nach product_name
      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.name.toLowerCase().includes(this.searchHandwerker.toLowerCase())

      );

      // Log-Ausgabe für die gefilterten Handwerker
      console.log('Filtered Handwerker:', this.filteredHandwerker);
    } else {

      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.adress.toLowerCase().includes(''.toLowerCase())
      );
    }
  }




  filterBaustoffhaendler(): void {
    if (this.searchBaustoffhaendler.trim() !== '') {

      // Filtern Sie Handwerker nur nach product_name
      this.filteredItems = this.items.filter(items =>
        items.name.toLowerCase().includes(this.searchBaustoffhaendler.toLowerCase())

      );

      // Log-Ausgabe für die gefilterten Handwerker
      console.log('Filtered Baustoffhändler:', this.filteredHandwerker);
    } else {

      this.filteredItems = this.items.filter(items =>
        items.adress.toLowerCase().includes(''.toLowerCase())
      );
    }
  }

  filterItems2(): void {
    if (this.searchTerm2.trim() !== '') {
      // Filtern Sie Baustoffhändler nach Adresse
      this.filteredItems = this.items.filter(item =>
        item.adress.toLowerCase().includes(this.searchTerm2.toLowerCase())
      );

      // Filtern Sie Handwerker nach Adresse
      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.adress.toLowerCase().includes(this.searchTerm2.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
      this.filteredHandwerker = this.handwerker;
    }
  }

  onRadiusChange() {
    if (this.selectedRadius !== -1) {
      // Filtern Sie Baustoffhändler nach Adresse oder Adresse_2 und Umkreis
      this.filteredItems = this.items.filter(item =>
        (item.adress.toLowerCase().includes(this.searchTerm2.toLowerCase()) ||
        (item.adress_2 && item.adress_2.toLowerCase().includes(this.searchTerm2.toLowerCase()))) &&
        item.radius <= this.selectedRadius
      );

      // Filtern Sie Handwerker nach Adresse oder Adresse_2 und Umkreis
      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        (handwerk.adress.toLowerCase().includes(this.searchTerm2.toLowerCase()) ||
        (handwerk.adress_2 && handwerk.adress_2.toLowerCase().includes(this.searchTerm2.toLowerCase()))) &&
        handwerk.radius <= this.selectedRadius
      );
    } else {
      this.filteredItems = this.items;
      this.filteredHandwerker = this.handwerker;
    }
  }

  onSearchInputChange(): void {
    this.searchService.setSearchTerm(this.searchTerm);
  }


  onEnterPressed(): void {
    // Hier können Sie zusätzliche Aktionen für Enter-Taste durchführen
    console.log(this.filterItems());
  }

  ngOnInit() {
    // Initialer Aufruf ohne Eingabe, um "Kaiserslautern"-Elemente anzuzeigen
    this.filterItems();
    // Überwachen Sie die Änderungen der Routen
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
    //     // Überprüfen Sie die aktuelle Route und zeigen Sie das Werbebanner entsprechend an
        if (this.router.url === '/') {
          this.showAdvertising = true;
        } else {
          this.showAdvertising = false;
        }
      }
    });

    this.selectedQuantity = 0;

    // this.quantityService.selectedQuantity$.subscribe(quantity => {
    //   this.selectedQuantity = quantity;
    // });

    this.menus = [
        {
            label: 'Dach/Fassade',
            routerLink: '/dach',
            items: [
                {
                    label: 'Dachziegel/ -steine',
                    routerLink: '/ziegel',
                    items: [
                      {
                          label: 'Braas',
                          routerLink: '/braas-unterkategorien'
                      },
                      {
                        label: 'Koramic',
                        routerLink: '/ziegel'
                    },
                    {
                      label: 'Röben',
                      routerLink: '/ziegel'
                  },
                  {
                    label: 'Nelskamp',
                    routerLink: '/ziegel'
                },
                {
                  label: 'Creaton',
                  routerLink: '/ziegel'
              },
              {
                label: 'Erlus',
                routerLink: '/ziegel'
            }
            ]
                },
                {

                    label: 'Dachdämmung',
                    routerLink: '/dachdaemmung'
                },
                {
                    label: 'Unterspannbahnen',
                    routerLink: '/dachbahnen'

                },
                {
                  label: 'Dachfenster',
                  routerLink: '/dachfenster'

                },
                {
                  label: 'Schiefer',
                  routerLink: '/schiefer'

              }
            ]
        },
        // {
        //     label: 'Fassade/Dämmung',
        //     items: [
        //         {
        //             label: 'Dämmplatten'
        //         },
        //         {
        //             label: 'Fensterbank'
        //         },
        //         {
        //             label: 'Fassadenputz'
        //         },
        //         {
        //             label: 'Mörtel'
        //         },
        //         {
        //           label: 'Putzgrund'
        //       }
        //     ]
        // },
        {
            label: 'Rohbau/Tiefbau',
            items: [
                {
                    label: 'Mauerwerk'
                },
                {
                    label: 'Mörtel'
                },
                {
                  label: 'Zement'
              },
              {
                label: 'Dämmstoffe'
            },
              {
                label: 'Beton/Estrich'
            }
            ]
        },
        {
            label: 'Maler/Trockenbau',
            items: [
                {
                    label: 'Farbe & Putze'
                },
                {
                    label: 'Lacke & Lasuren'
                },
                {
                    label: 'Tapeten'
                },
                {
                    label: 'Zubehör'
                }
            ]
        },
        {
          label: 'Laminat/Fliesen',
          items: [
              {
                  label: 'Fliesen'
              },
              {
                  label: 'Vinylböden'
              },
              {
                  label: 'Parkett'
              },
              {
                  label: ' Laminatboden'
              }
          ]
      },
      {
        label: 'Außenanlagen',
        items: [
            {
                label: 'Terassendielen'
            },
            {
                label: 'Terassenplatten'
            },
            {
                label: 'Zäune'
            },
            {
                label: 'Pflastersteine'
            }
        ]
    },
    {
      label: 'Werkzeug/Maschinen',
      items: [
          {
              label: 'Akku-werkzeug'
          },
          {
              label: 'Elektrowerkzeug'
          },
          {
              label: 'Handwerkzeug'
          }
      ]
  },
    ];
}

ngOnDestroy(): void {
  if (this.quantitySubscription) {
    this.quantitySubscription.unsubscribe();
  }
}
}
