import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';

interface Baustoffhändler {
  logo: string;
  adress: string;
  product_name: string;
  name:string;
  // radius: string;

};

interface Handwerker {
  logo: string;
  adress: string;
  product_name: string;
  // radius: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: Baustoffhändler[];
  handwerker: Handwerker[];
  menus: MenuItem[];
  searchTerm: string = '';
  searchTerm2: string = '';
  filteredItems: Baustoffhändler[];
  filteredHandwerker: Handwerker[] = [];
  showAdvertising: boolean = true; // Ändern Sie dies basierend auf Ihren Anforderungen
  selectedRadius: number = 10;


  public constructor(private router: Router){
    this.items = [
      {logo: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/04/raab-karcher-logo.jpg", adress:"Kaiserslautern", product_name:"Ziegel", name: "Raab Karcher"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.n_R8v2CwWRawt-FcoGdSJgAAAA&pid=Api&P=0&h=180", adress:"Saarbrücken", product_name:"Ziegel", name: "Wego"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.eazMVopEqR-3CTnYCLBuVwHaCG&pid=Api&P=0&h=180", adress:"Saarbrücken", product_name:"Ziegel", name: "Hubing"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.Pu0cINY7aE6E4ktOifuE4gAAAA&pid=Api&P=0&h=180", adress:"Saarbrücken", product_name:"Ziegel", name: "Omlor"},
      // {logo: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2021/04/raab-karcher-logo.jpg", name: "RAAB KARCHER", adress:"Merkurstraße 39, 66111 Saarbrücken", tel:"0631 5 34 30", product_name:"Vollsickerrohr", city:"Saarbrücken"},
      // {logo: "https://tse3.mm.bing.net/th?id=OIP.eazMVopEqR-3CTnYCLBuVwHaCG&pid=Api&P=0&h=180", name: "Hubing GmbH", adress:"Hauptstr. 14, 67697 Otterberg", tel:"06301 20 26", product_name:"Ziegel", city:"Kaiserslautern"},

    ];
    this.handwerker = [
      {logo: "https://tse3.mm.bing.net/th?id=OIP.GLd703di2IXEfIT6TSEkmwHaCv&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Ziegel"},
      {logo: "https://tse3.mm.bing.net/th?id=OIP.Gvk8Jsk6fcvntGC5mGs8LQHaHa&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Ziegel"},
      {logo: "https://tse4.mm.bing.net/th?id=OIP.TLm50CAwI-pS0H9AsARw1QHaCx&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Ziegel"},
      {logo: "https://tse2.mm.bing.net/th?id=OIP.KN77yWC1SrXaYK8C9w2XogHaBP&pid=Api&P=0&h=180", adress:"Kaiserslautern", product_name:"Ziegel"}
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
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      // Log-Ausgabe für die gefilterten Baustoffhändler
      console.log('Filtered Items:', this.filteredItems);

      // Filtern Sie Handwerker nur nach product_name
      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.product_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      // Log-Ausgabe für die gefilterten Handwerker
      console.log('Filtered Handwerker:', this.filteredHandwerker);
    } else {
      // Wenn der Benutzer nichts eingegeben hat, filtern Sie nach der Adresse "Kaiserslautern"
      this.filteredItems = this.items.filter(item =>
        item.adress.toLowerCase().includes('Kaiserslautern'.toLowerCase())
      );

      this.filteredHandwerker = this.handwerker.filter(handwerk =>
        handwerk.adress.toLowerCase().includes('Kaiserslautern'.toLowerCase())
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
    console.log('Ausgewählter Radius:', this.selectedRadius);
    // Hier kannst du den Wert weiterverwenden, z.B. für Filterung oder andere Logik
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
