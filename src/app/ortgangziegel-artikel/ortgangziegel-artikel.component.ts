import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from '../search.service';

interface Ortgangziegel {
  product_image: string;
  product_name: string;
  offer: string;
  price: string;
  productId: string;
};

@Component({
  selector: 'app-ortgangziegel-artikel',
  templateUrl: './ortgangziegel-artikel.component.html',
  styleUrl: './ortgangziegel-artikel.component.css'
})
export class OrtgangziegelArtikelComponent {
  items: Ortgangziegel[];
  searchTerm: string = '';
  filteredItems: Ortgangziegel[];

  searchTerm2: string = '';
  showAdvertising: boolean = true;


  public constructor(private router: Router, private searchService: SearchService){
    this.items = [
      {productId: '1', product_image: "assets/images/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg", product_name:"Taunus Pfanne", offer: "ANGEBOT ANZEIGEN", price:"0,86 €"},
      {productId: '2',product_image: "assets/images/Pro-rot-Granit-Matt.jpg", product_name:"Taunus Pfanne Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"10,90 €"},
      {productId: '3',product_image: "assets/images/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Granit-Matt.jpg", product_name:"Taunus Pfanne Firststein", offer: "ANGEBOT ANZEIGEN", price:"8,50 €"},
      {productId: '4',product_image: "assets/images/Product-Hero-rot.jpg", product_name:"Taunus Pfanne Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {productId: '5',product_image: "assets/images/Product-Hero-Schiefergrau-Matt.jpg", product_name:"Taunus Pfanne Halber Normalstein", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {productId: '6',product_image: "assets/images/Product-Hero-Granit-Matt.jpg", product_name:"Taunus Pfanne Flächenlüfterstein", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {productId: '7',product_image: "assets/images/Product-Hero-Ziegelrot-Matt.jpg", product_name:"Taunus Pfanne Pult-Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"},


      {productId: '8',product_image: "assets/images/Product-Hero-Schiefergrau-Mat.jpg", product_name:"Taunus Pfanne Mansardstein", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {productId: '9',product_image: "assets/images/Product-Hero-ot-Schiefergrau-Matt.jpg", product_name:"Taunus Pfanne halber Mansardstein", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {productId: '10',product_image: "assets/images/Product-Hero-Small-Desktop-Schiefergrau-Matt.jpg", product_name:"Taunus Pfanne Mansard-Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {productId: '11',product_image: "assets/images/Product-Hero-Small-Desktop--Matt.jpg", product_name:"Taunus Pfanne Mansard-Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {productId: '12',product_image: "assets/images/Product-Hero-Small-Desktop--rot-Schiefergrau-Matt.jpg", product_name:"Taunus Pfanne Knick-Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

    ];
    this.filteredItems = this.items;

  }


  filterItems(searchTerm: string): void {
    // Führen Sie die Filterung durch und aktualisieren Sie die filteredItems-Liste
    this.filteredItems = this.items.filter(item =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
    // Initialer Aufruf ohne Eingabe, um "Kaiserslautern"-Elemente anzuzeigen
    this.searchService.searchTerm$.subscribe(searchTerm => {
      // Hier können Sie den Suchbegriff verwenden, um Ihre Artikel zu filtern oder anzeigen
      this.filterItems(searchTerm);
      console.log(this.filterItems);
    });
    // Überwachen Sie die Änderungen der Routen
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
    // Überprüfen Sie die aktuelle Route und zeigen Sie das Werbebanner entsprechend an
        if (this.router.url === '/') {
          this.showAdvertising = true;
        } else {
          this.showAdvertising = false;
        }
      }
    });
}

}
