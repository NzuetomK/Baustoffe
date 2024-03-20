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
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm", product_name:"Taunus Pfanne", offer: "ANGEBOT ANZEIGEN", price:"16,99 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkyMTA3M3xpbWFnZS9qcGVnfGFHUm1MMmczWkM4NU1EUTJOamMxTnpnek56RXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4ZDJkM2UzMTUwZjQ3NzYwZjkyYWUyMDYwMjUxY2MzMjgxNzllYjM5ZGI3YTAwZWQwNWFhNDIxZDAxNjA2ZDJm", product_name:"Taunus Pfanne Schlussstein links", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNTk0MnxpbWFnZS9qcGVnfGFESmhMMmd5WVM4NU1EUTJOVFE0T1RjeE5UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZmNjMDIzYmIxZjk2NDY0OTdiN2MxY2QwMjI2YjQxOTVjOTQ3M2ZlMjVkZGM2MGQ5YjQ1Nzg3OTVlNzc1NzYzMQ", product_name:"Taunus Pfanne Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8-RE-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8Mzg1NzN8aW1hZ2UvanBlZ3xhR0kyTDJneE1TODVNRFEyTlRVeE9EVTFNVE0wTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGFXVmlaV3hmT0N3NFgxSkZYMU4wWVhKTlFWUlVYM0p2ZEM1cWNHY3w1MWMwY2RhOGYwZTYyZTIwYjFiM2E0YjlhYjYzYWY0ZTgyOWIxMmFmNmY2Nzg5MmQwMTQ0ZWMxYmJmNGU3Nzdk", product_name:"Taunus Pfanne Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Halber-Stein-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTg4OTc2MHxpbWFnZS9qcGVnfGFHVXlMMmcyWXk4NU1EUTJOVFl3TlRBMU9EZzJMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlJWVd4aVpYSmZVM1JsYVc1ZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZTgxZmZiMjcxODVhMmMzZGU3ZDk5OTgzNDY5NGEyNDZhYzUyZjE1M2E2NGQ2ZWVlYjkzYjRhM2IzZGZkY2YwYQ", product_name:"Taunus Pfanne Halber Normalstein", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Luefter-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxODk1NHxpbWFnZS9qcGVnfGFEQTNMMmcwTlM4NU1EUTJOVGcwTnpVME1qQTJMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlNZFdWbWRHVnlYMU4wWVhKTlFWUlVYM0p2ZEY5SGNtRnVhWFFnVFdGMGRDNXFjR2N8ZTcyODExMTExOGIwODZiNTNhMDcxMzY0ZjdjYTBiZWE3YTUzNDkyMmI0YmI0NjEwNDdlMWY3MGY1MDc1OTE2NA", product_name:"Taunus Pfanne Flächenlüfterstein", offer: "ANGEBOT ANZEIGEN", price:"6,99 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-PultGieb-RE-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwODY4NnxpbWFnZS9qcGVnfGFHVTJMMmc0TkM4NU1EUTJOalU1TnpJM016a3dMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlRZFd4MFIybGxZbDlTUlY5VGRHRnlUVUZVVkY5eWIzUmZXbWxsWjJWc2NtOTBJRTFoZEhRdWFuQm58NGJmMjJlODQ2YjYzMzJlYmM1ZmY4NjkxZWI4NDA5ZmU5NTNiZmIzNmEzNWJlNzA3ZmVhMjFlNWQ0ZGMwZDAzOA", product_name:"Taunus Pfanne Pult-Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"},


      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Mansardstein-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwODg1NnxpbWFnZS9qcGVnfGFEa3pMMmhoWWk4NU1EUTJOVGsyTkRnMU1UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlOWVc1ellYSmtjM1JsYVc1ZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8MWQyMGZhNGQxM2Q4YWFmMzZiZDVlNDA5ZTJjMmJhOTdiNmYzYmIyNDJkZTAwMzlhYWY0NjIxN2UzY2Q5NTgwYg", product_name:"Taunus Pfanne Mansardstein", offer: "ANGEBOT ANZEIGEN", price:"ab 15,97 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-MansHalber-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8NDI0NzR8aW1hZ2UvanBlZ3xhREl3TDJobU55ODVNRFF4TlRRNU9UVXhNREEyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5TllXNXpTR0ZzWW1WeVgxTjBZWEpOUVZSVVgzSnZkRjlUWTJocFpXWmxjbWR5WVhVZ1RXRjBkQzVxY0djfDkyZTdlMTIzODhmNmZlMjBjYjZlMjZkMGFlMzU2OTdjMTQxZGZhMjliNzY0NTFjN2Q1MmRjMDAwOTJmZjE1MjM", product_name:"Taunus Pfanne halber Mansardstein", offer: "ANGEBOT ANZEIGEN", price:"19,84 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-MansGieb-8-8-LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwMzA3MHxpbWFnZS9qcGVnfGFEQmpMMmhrWkM4NU1EUTJOVGt3TlRnMk9URXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlOWVc1elIybGxZbDg0TERoZlRFbGZVM1JoY2sxQlZGUmZjbTkwWDFOamFHbGxabVZ5WjNKaGRTQk5ZWFIwTG1wd1p3fGU1YTgxM2Q5NDY4ZGYxNjBkMmVlMjUzNTM3YjdlMDAwYmY2OGY5MGEzODQxNWQ3ZmNlY2NlNmZjOTkwZWU5ZWI", product_name:"Taunus Pfanne Mansard-Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"22,44 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-MansGieb-RE-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8NDI0ODl8aW1hZ2UvanBlZ3xhRE5qTDJnd05TODVNRFF4TlRReU1ESXhNVFV3TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5TllXNXpSMmxsWWw5U1JWOVRkR0Z5VFVGVVZGOXliM1JmVTJOb2FXVm1aWEpuY21GMUlFMWhkSFF1YW5Cbnw2MmE5NzBmNTYyY2FhMmFkNTcxMjhjZjg5MGFlOWM1YmIwOWY5MWM1NmRjMjY0MGI0YzllNjlkM2MzNDFlNjVj", product_name:"Taunus Pfanne Mansard-Giebelstein rechts", offer: "ANGEBOT ANZEIGEN", price:"45,27 €"},
      {product_image: "https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-KnickGieb-8-8-LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTg5OTc1MHxpbWFnZS9qcGVnfGFEWmlMMmczWlM4NU1EUTJOVFkxTlRVeU1UVTRMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlMYm1samEwZHBaV0pmT0N3NFgweEpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4MmNhMjQ1MTNmM2RhYjYxOWNiZDViYWRjNzdmN2U4NmUyNWEwZTI4MDZmZjE3ZTVhMGUxNDliMGNhMThkYzU2", product_name:"Taunus Pfanne Knick-Giebelstein links", offer: "ANGEBOT ANZEIGEN", price:"16,20 €"}

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
