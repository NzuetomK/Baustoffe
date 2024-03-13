import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from '../search.service';

interface Steildach {
  product_image: string;
  product_name: string;
  offer: string;
  price: string;
};


@Component({
  selector: 'app-steildach-daemmung-artikel',
  templateUrl: './steildach-daemmung-artikel.component.html',
  styleUrl: './steildach-daemmung-artikel.component.css'
})
export class SteildachDaemmungArtikelComponent {
  items: Steildach[];
  searchTerm: string = '';
  filteredItems: Steildach[];

  searchTerm2: string = '';
  showAdvertising: boolean = true; // Ändern Sie dies basierend auf Ihren Anforderungen


  public constructor(private router: Router, private searchService: SearchService){
    this.items = [
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/l/i/linitherm_3212938-3212945_linitherm_pal-n-f-platte_produktbild.jpg", product_name:"LINITHERM PAL N+F Dämmplatte - 2420 x 1000 mm", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/m/u/multipor_multipor_2739.jpg", product_name:"Mineraldämmplatte DAD Steildachdämmung | 600x390 mm", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/b/a/bauder_pir-mde_1_.jpg", product_name:"Steildachwärmedämm WLS 023 - Nut & Feder DAD | 600x390 mm", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/s/i/siga_siga_majpell_5_dampfbremse_-_1-5x50_m.jpg", product_name:"SIGA Majpell 5 Dampfbremse plus -20m Rolle", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/s/u/superglass_sd_kf3v-035_50er.jpg", product_name:"Superglass Untersparren-Klemmfilz 5000 x 1250 x 50 mm", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {product_image: "https://www.baustoffshop.de/pub/media/catalog/product/t/h/thermo-hanf_thermo-hanf-combi-jute-01.jpg", product_name:"THERMO HANF Combi Jute Dämmplatte 1200x840 mm Klemmfilz -", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

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
