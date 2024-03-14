import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SearchService } from '../search.service';

interface Ortgangziegel {
  product_image: string;
  product_name: string;
  offer: string;
  price: string;
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
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-975433.jpg?context=bWFzdGVyfGltYWdlc3wyMzc5OXxpbWFnZS9qcGVnfGg4ZS9oM2QvODg5NzcyMTQ2NjkxMC9QQl85NzU0MzMuanBnfDJhMWIwMTQ3MmY2YTNkMzQyYWY0ODBhYTQwZjI1NjFjM2M2N2YzZDZlNWFkNGVjYzU5OTY3NGUwZTFhNGY2N2I&w=720&q=76", product_name:"Ortgangziegel links Linea Klassik Engobe", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-166422.jpg?context=bWFzdGVyfGltYWdlc3wyODAzNnxpbWFnZS9qcGVnfGg3Mi9oZGQvODg5NjYzMzg2NDIyMi9QQl8xNjY0MjIuanBnfDQ4ZTg4ODI1NTU5ZDMwODg1NmViNjgwZTM5NGFmMGZlMzQyZDE5OTQ4ZmIyMDFkN2E5MmRhMDQ0ZGM1MTA4YWI&w=720&q=76", product_name:"Ortgangziegel links Herzziegel natur", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-979655.jpg?context=bWFzdGVyfGltYWdlc3wzMDExMnxpbWFnZS9qcGVnfGhmOS9oZGMvODg5Nzc3MzUzNTI2Mi9QQl85Nzk2NTUuanBnfDAyNDkxNGI0NTBjM2M1MjBiMTYzNjMwZGNmNTFkODcwOGM5YTAxMmNhYTIyNmQ4Y2JiMGIzNWRiNDdiOTVhY2I&w=720&q=76", product_name:"Ortgangziegel links Falzziegel Engobe", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-504346.jpg?context=bWFzdGVyfGltYWdlc3wyMjU4NHxpbWFnZS9qcGVnfGhlNi9oZDgvODg5NzU5MDE5ODMwMi9QQl81MDQzNDYuanBnfDExZDE0ZDRhZjhjYzM0NzQxODg1MTAwYjQ4ZDYwMmJlNjllMDhhNmQ5NmUwZTE0YjZhNTI1MjM1OTNjNDE3ZjU&w=720&q=76", product_name:"Ortgangziegel rechts Smaragd seidenmatt", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-653522.jpg?context=bWFzdGVyfGltYWdlc3wzOTk4NnxpbWFnZS9qcGVnfGg1My9oZjYvODg5ODY0MjUwOTg1NC9QQl82NTM1MjIuanBnfGU5ZTUwMGZiMzBjZDU2OTRkMWEyNmRhYWI2NWM2M2Q3NGUzYTc5ZDdmMjUyZDUzOWEyZWE3NmMzNTZmZTgwMjA&w=720&q=76", product_name:"Ortgangziegel rechts R 13 S Engobe", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {product_image: "https://ayilolvodm.cloudimg.io/v7/https://www.welt-der-baustoffe.de/medias/PB-542936.jpg?context=bWFzdGVyfGltYWdlc3wyNDgwN3xpbWFnZS9qcGVnfGhhMS9oMDUvODg5NjY1MjQ3NjQ0Ni9QQl81NDI5MzYuanBnfGIyMjFjYjZiNTc2NGNhNTNjYTk0M2VkMDVjYmU1NWRhMTVhNGFhNmQzNjBhZWQzNTc3OGY0NjUyYmEyYWEyZmI&w=720&q=76", product_name:"Ortgangziegel links Cosmo 13 S Engobe", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

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
