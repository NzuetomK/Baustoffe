import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from '../search.service';


interface Firstziegel {
  product_image: string;
  product_name: string;
  offer: string;
  price: string;
};


@Component({
  selector: 'app-firstziegel-artikel',
  templateUrl: './firstziegel-artikel.component.html',
  styleUrl: './firstziegel-artikel.component.css'
})
export class FirstziegelArtikelComponent {
  items: Firstziegel[];
  searchTerm: string = '';
  filteredItems: Firstziegel[];

  searchTerm2: string = '';
  showAdvertising: boolean = true;


  public constructor(private router: Router, private searchService: SearchService){
    this.items = [
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-503343.jpg?context=bWFzdGVyfGltYWdlc3wyNzE2MXxpbWFnZS9qcGVnfGgzYy9oNTUvODg5NzUzNTAxNjk5MC9QQl81MDMzNDMuanBnfDAzYWE1MTJlN2UyYzU2NTAwODUwNDExY2JlNDQ0ZjhhMmI4M2ZmN2I1MTM1ZDU3YzEyMDFhZjFlNjgyMmRmOGY&w=720&q=76", product_name:"Firstziegel Konischer First (K) matt", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-592506.jpg?context=bWFzdGVyfGltYWdlc3wyOTQwMHxpbWFnZS9qcGVnfGhhNS9oMTQvODg5ODU2ODA5MzcyNi9QQl81OTI1MDYuanBnfDE3OGM5ZWExZmFmODI2ZmEyZjk0Nzk1YWUzYTI5Y2U4NjRmODRkNjEyZWVjOTNjM2ZmYTFkZTJmNDc0ZWRjZWY&w=720&q=76", product_name:"Firstziegel Nr. 2 Falzfirst Klassik Engobe", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-504061.jpg?context=bWFzdGVyfGltYWdlc3wyNzI3NHxpbWFnZS9qcGVnfGgyZC9oYzEvODg5NzU3NDYwMDczNC9QQl81MDQwNjEuanBnfDNlMDFlZTZhMjQ3MDg2NjcyMjYzM2MwY2I5NTBhNDliYWQ0OTA0NzZmM2FmN2RhYmExZGZjNWJkOWZlN2RjMWY&w=720&q=76", product_name:"Firstanfänger Konischer First (O) matt", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-979662.jpg?context=bWFzdGVyfGltYWdlc3wxNzQ2OHxpbWFnZS9qcGVnfGgwMS9oODQvODg5Nzc3NDA1OTU1MC9QQl85Nzk2NjIuanBnfDQ2ZGI2NTdlZTRmY2FkNWI1MDJkM2IwYzFlZjNjMDY4NDUzYmY2ZWQ3NmZkNTA4ZWMwMjYxNzY5ZjJmZWRlOTQ&w=720&q=76", product_name:"Firstziegel Nr. 18 Klassik Engobe", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-653740.jpg?context=bWFzdGVyfGltYWdlc3wzODg3MHxpbWFnZS9qcGVnfGhjYS9oMjgvODg5ODY0NDM3NzYzMC9QQl82NTM3NDAuanBnfDM3ZjA5ZjQyNmU0ZGZkYjFhMzc1NDkxMTAzODA4YzBjODA1NDE2NWVjNWJiMWY3MzgyNTI4ZTU2MzEwZTk5MDg&w=720&q=76", product_name:"Firstziegel Nibra F10 Ü Engobe", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-3209180.jpg?context=bWFzdGVyfGltYWdlc3wxNzk2NHxpbWFnZS9qcGVnfGg3Zi9oNGEvODk4MzEwOTg5NDE3NC9QQl8zMjA5MTgwLmpwZ3xiMDE5OWU5MWJiNTJhYjY4ZDFhMjVlMjk0NDQxN2YxMDIzMDc1MTRhYjcwM2ZlODhkZmNiNTUxNWYxZTljYzI4&w=720&q=76", product_name:"Firstziegel Gratziegel Nr. 200 Engobe", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

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
