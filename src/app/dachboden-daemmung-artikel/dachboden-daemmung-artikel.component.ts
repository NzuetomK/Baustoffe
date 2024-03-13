import { Component } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { SearchService } from '../search.service';

interface Dachboden {
  product_image: string;
  product_name: string;
  offer: string;
  price: string;
};


@Component({
  selector: 'app-dachboden-daemmung-artikel',
  templateUrl: './dachboden-daemmung-artikel.component.html',
  styleUrl: './dachboden-daemmung-artikel.component.css'
})
export class DachbodenDaemmungArtikelComponent {
  items: Dachboden[];
  searchTerm: string = '';
  filteredItems: Dachboden[];

  searchTerm2: string = '';
  showAdvertising: boolean = true; // Ändern Sie dies basierend auf Ihren Anforderungen


  public constructor(private router: Router, private searchService: SearchService){
    this.items = [
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/k/n/knaufinsulation_ki-rmw-kp-035-hb_print.jpg", product_name:"Dachboden-Dämmplatte- 1200x625 mm", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/i/s/isover_topdec_14109_topdec_loft_7.jpg", product_name:"Dachboden Steinwoll- 1200 x 625 mm", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/s/u/superglass_sg_topdec-loft_100er.jpg", product_name:"Superglass Dachboden- 1200x625 mm", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/b/a/bachl_eps-boden-daemmplatte_ausschnitt.jpg", product_name:"Bachl Boden-Dämmplatte 1210x610 mm", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/r/o/rockwool_rockwool-daemmfilz-varirock-035-01.jpg", product_name:"Rockwool Varirock 035 Dämmfilz, 1000 mm", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/r/o/rockwool_tegarock-l-rockwool-platten.jpg", product_name:"Rockwool Dämmplatte Tegarock, 1000x600 mm", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

    ];
    this.filteredItems = this.items;

  }



  filterItems(searchTerm: string): void {
    // Führen Sie die Filterung durch und aktualisieren Sie die filteredItems-Liste
    // Beispiel: Hier filtern wir basierend auf dem product_name
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
    //     // Überprüfen Sie die aktuelle Route und zeigen Sie das Werbebanner entsprechend an
        if (this.router.url === '/') {
          this.showAdvertising = true;
        } else {
          this.showAdvertising = false;
        }
      }
    });
}
}
