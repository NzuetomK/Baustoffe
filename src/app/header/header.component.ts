import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SearchService } from '../search.service';

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
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();

  onSearchInput(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.searchService.setSearchTerm(this.searchTerm);
  }


  items: Baustoffhändler[];
  handwerker: Handwerker[];
  menus: MenuItem[];
  searchTerm: string = '';
  searchTerm2: string = '';
  filteredItems: Baustoffhändler[];
  filteredHandwerker: Handwerker[] = [];
  showAdvertising: boolean = true;
  selectedRadius: number = 0;



  public constructor(private router: Router, private searchService: SearchService){
    this.items = [
      {logo: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/04/raab-karcher-logo.jpg", adress:"Kaiserslautern", product_name:"Dachboden-Dämmplatte- 1200x625 mm", name: "Raab Karcher", radius:20, adress_2:"Saarbrücken", product_name2:"LINITHERM PAL N+F Dämmplatte - 2420 x 1000 mm", product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.n_R8v2CwWRawt-FcoGdSJgAAAA&pid=Api&P=0&h=180", adress:"Rockenhausen", product_name:"Superglass Dachboden- 1200x625 mm", name: "Wego", radius:20, adress_2:"Kaiserslautern",product_name2:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm", product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.eazMVopEqR-3CTnYCLBuVwHaCG&pid=Api&P=0&h=180", adress:"Zweibrücken", product_name:"Superglass Dachboden- 1200x625 mm", name: "Hubing", radius:35, adress_2:"Kaiserslautern", product_name2:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm", product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.Pu0cINY7aE6E4ktOifuE4gAAAA&pid=Api&P=0&h=180", adress:"Paderborn", product_name:"Superglass Dachboden- 1200x625 mm", name: "Omlor", radius:60, adress_2:"Badlipspringe", product_name2:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm", product_name3:"Ortgangziegel links Falzziegel Engobe"},

    ];
    this.handwerker = [
      {logo: "https://tse3.mm.bing.net/th?id=OIP.GLd703di2IXEfIT6TSEkmwHaCv&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Superglass Dachboden- 1200x625 mm", radius:20, adress_2:"Saarbrücken", product_name2:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm",product_name3:"Ortgangziegel links Linea Klassik Engobe"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.Gvk8Jsk6fcvntGC5mGs8LQHaHa&pid=Api&P=0&h=180", adress:"Homburg", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:32, adress_2:"Kaiserslautern", product_name2:"LINITHERM PAL N+F Dämmplatte - 2420 x 1000 mm", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      {logo: "https://tse4.mm.bing.net/th?id=OIP.TLm50CAwI-pS0H9AsARw1QHaCx&pid=Api&P=0&h=180", adress:"Pirmasens", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:29, adress_2:"Kaiserslautern", product_name2:"LINITHERM PAL N+F Dämmplatte - 2420 x 1000 mm", product_name3:"Ortgangziegel links Falzziegel Engobe"},
      {logo: "https://tse2.mm.bing.net/th?id=OIP.KN77yWC1SrXaYK8C9w2XogHaBP&pid=Api&P=0&h=180", adress:"Frankenthal", product_name:"Dachboden-Dämmplatte- 1200x625 mm", radius:45, adress_2:"Kaiserslautern", product_name2:"LINITHERM PAL N+F Dämmplatte - 2420 x 1000 mm", product_name3:"Ortgangziegel links Falzziegel Engobe"}
    ];
    this.menus = [];
    this.filteredItems = this.items;
    this.filteredHandwerker = this.handwerker;

  }

  filterItems(): void {
    if (this.searchTerm.trim() !== '') {
      // Filtern Sie Baustoffhändler
      this.filteredItems = this.items.filter(item =>
        item.product_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.product_name2.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.product_name3.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      // Log-Ausgabe für die gefilterten Baustoffhändler
      console.log('Filtered Items:', this.filteredItems);

      // Filtern Sie Handwerker nur nach product_name
      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.product_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        handwerk.product_name2.toLowerCase().includes(this.searchTerm.toLowerCase())||
        handwerk.product_name3.toLowerCase().includes(this.searchTerm.toLowerCase())

      );

      // Log-Ausgabe für die gefilterten Handwerker
      console.log('Filtered Handwerker:', this.filteredHandwerker);
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
    if (this.selectedRadius !== 0) {
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

    this.menus = [
        {
            label: 'Dach',
            routerLink: '/dach',
            items: [
                {
                    label: 'Dachdämmung',
                    routerLink: '/dachdaemmung'
                },
                {
                    label: 'Ziegel',
                    routerLink: '/ziegel'

                },
                {
                    label: 'Dachbahnen',
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
        {
            label: 'Fassade/Dämmung',
            items: [
                {
                    label: 'Dämmplatten'
                },
                {
                    label: 'Fensterbank'
                },
                {
                    label: 'Fassadenputz'
                },
                {
                    label: 'Mörtel'
                },
                {
                  label: 'Putzgrund'
              }
            ]
        },
        {
            label: 'Rohbau/Tiefbau',
            items: [
                {
                    label: 'Oberputze'
                },
                {
                    label: 'Unterputze'
                },
                {
                  label: 'Baustahl'
              },
              {
                label: 'Dämmung'
            },
              {
                label: ' Mauerwerke'
            }
            ]
        },
        {
            label: 'Maler/Trockenbau',
            items: [
                {
                    label: 'Trockenbauplatten'
                },
                {
                    label: 'Innendämmung'
                },
                {
                    label: 'Spachtelmassen'
                },
                {
                    label: 'Trockenbauprofile'
                },
                {
                    label: 'Befestigungstechnik'
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
              },
              {
                  label: 'Archieve'
              }
          ]
      },
      {
        label: 'Außenanlage',
        items: [
            {
                label: 'Entwässerungsrinne'
            },
            {
                label: 'Regenwassernutzung'
            },
            {
                label: 'Terasse'
            },
            {
                label: 'Balkon'
            },
            {
                label: 'Natursteine'
            }
        ]
    },
    {
      label: 'Werkzeug/Maschinen',
      items: [
          {
              label: 'Sägen'
          },
          {
              label: 'Trennmaschinen'
          },
          {
              label: ' Druckluftgeräte'
          },
          {
              label: 'Gartenschläuche'
          },
          {
              label: 'Schraubendreher & Schlüssel'
          }
      ]
  },
    ];
}
}
