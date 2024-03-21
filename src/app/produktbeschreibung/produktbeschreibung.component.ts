import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';
import { ActivatedRoute } from '@angular/router';

interface Produktbeschreibung {
  imageUrl: string;
  farbe: string;
};

@Component({
  selector: 'app-produktbeschreibung',
  templateUrl: './produktbeschreibung.component.html',
  styleUrls: ['./produktbeschreibung.component.css']
})
export class ProduktbeschreibungComponent {
  items: Produktbeschreibung[] = [];
  selectedImageSrc: string = '';
  selectedColor: string = '';

   // Variable für die ausgewählte Menge
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  selectedQuantity: number;

  // Preis pro Artikel in Euro
  pricePerItem: number = 0;

  // Gesamtpreis
  totalPrice: number = 0;

  showCheckIcon: boolean = false;
  checkIcon: string = "pi pi-check";
  productId: string = '';

  constructor(private route: ActivatedRoute, private quantityService: QuantityService) {
    this.selectedQuantity = 1;
    this.calculateTotalPrice();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
      this.loadProductInfo(this.productId);
    });
    this.selectedQuantity = 1;
    this.calculateTotalPrice();
  }


  loadProductInfo(productId: string): void {
    if (productId === '1') {
      this.items = [
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm', farbe:"Granit"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8MTk5NDN8aW1hZ2UvanBlZ3xhRGhsTDJneU5TODVNRFEyTlRVMk9UQXhOREEyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5CbnxhZGVlMzk1MzZhN2RlY2NiNjA5NGQ3MzE2ZjBlMDNiN2JlNjE0M2U2MTYwYWY5YzU0MWE4YTlkOTI1MDYzY2U3', farbe:"Klassisch-Rot"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schiefergrau.jpg?context=bWFzdGVyfHJvb3R8NDQ3NTl8aW1hZ2UvanBlZ3xhRFEzTDJoalpDODVNRFEyTmpjeU16YzFPRE00TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHBaV1psY21keVlYVXVhbkJufGRlYjgzMzI2YzFkMWI1N2Y5MmI1MDZhMDQ0YWUxZDY0NDM3OTViZGE2MzJmY2RmMTdhMzljOGVmZjUxYzdiZWQ', farbe:"Schiefergrau"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Ziegelrot.jpg?context=bWFzdGVyfHJvb3R8NDU3Njh8aW1hZ2UvanBlZ3xhR0UwTDJnMk9DODVNRFEyTmpnek1qVTBPREUwTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5YWFXVm5aV3h5YjNRdWFuQm58NGYwMDEzNTkzOWVlNTdlYWMyN2QwMGM1MGU3OTZkZjcyODIyYWJmYWFhZDhkOTU5ZjgyMTYzYjVmNzcyODYzMg', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 16.99;
      this.totalPrice = 16.99;
      this.selectedColor='Granit';
      this.selectedImageSrc="https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm"

    } else if (productId === '2') {
      this.items = [
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMjAzMXxpbWFnZS9qcGVnfGFHTXlMMmcyTlM4NU1EUTJOamMxTURZeU9ERTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5SGNtRnVhWFFnVFdGMGRDNXFjR2N8OTNjM2E4ZTZkZjVmYzk2Yjg4OTIzMTFlYTZiYzQyMDYxOWFmN2M2NWFlOWFmODk4OTNkOTU0OWEzZmY5MzRjMg', farbe:"Granit"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NTE2NzR8aW1hZ2UvanBlZ3xhRGRsTDJnMlpDODVNRFEyTmpjek1EazJOek0wTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHNkWE56WDFOMFlYSk5RVlJVWDNKdmRDNXFjR2N8NDM4NDcxMzQzYzkwYmQwZmIzNTI2YTlmNDY0NDM0YjQ2Mzk5ZGQyM2EzZjlmNzE1MTJhYmMwOWQ2MTMzOWRlZA', farbe:"Klassisch-Rot"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkyMTA3M3xpbWFnZS9qcGVnfGFHUm1MMmczWkM4NU1EUTJOamMxTnpnek56RXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4ZDJkM2UzMTUwZjQ3NzYwZjkyYWUyMDYwMjUxY2MzMjgxNzllYjM5ZGI3YTAwZWQwNWFhNDIxZDAxNjA2ZDJm', farbe:"Schiefergrau"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNDc4M3xpbWFnZS9qcGVnfGFHRTRMMmcxTmk4NU1EUTJOamM0TWpBNE5UUXlMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5YWFXVm5aV3h5YjNRZ1RXRjBkQzVxY0djfDg3OGEzOWY5NmQwYzY3YjJmYTlhYWVmYzk3YWI4OTk4ZjAwMDQzY2RkN2I3MjU2NmVmODA4YTZmMmE1MzA0ZDc', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 15.97;
      this.totalPrice = 15.97;
      this.selectedColor='Schiefergrau';
      this.selectedImageSrc="https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkyMTA3M3xpbWFnZS9qcGVnfGFHUm1MMmczWkM4NU1EUTJOamMxTnpnek56RXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4ZDJkM2UzMTUwZjQ3NzYwZjkyYWUyMDYwMjUxY2MzMjgxNzllYjM5ZGI3YTAwZWQwNWFhNDIxZDAxNjA2ZDJm"
    }
    // Fügen Sie weitere Bedingungen hinzu, um Informationen für andere Produkt-IDs zu setzen
  }


  // Berechnen Sie den Gesamtpreis basierend auf dem Preis pro Artikel und der ausgewählten Menge
  calculateTotalPrice() {
    this.totalPrice = this.pricePerItem * this.selectedQuantity;
  }

   // Diese Funktion wird aufgerufen, wenn sich die ausgewählte Menge ändert
   onQuantityChange() {
    // Berechnen Sie den Gesamtpreis erneut
    this.calculateTotalPrice();
  }

  addToCart(): void {
    // console.log('Menge zum Einkaufswagen hinzufügen:', this.selectedQuantity);
    // this.quantityService.setSelectedQuantity(this.selectedQuantity);
        // Fügen Sie hier die Logik zum Hinzufügen des Produkts zum Einkaufswagen hinzu
    this.showCheckIcon = true;
    setTimeout(() => {
      this.showCheckIcon = false;
    }, 5000);
  }

  updateImage(imageUrl: string, farbe: string): void {
    this.selectedImageSrc = imageUrl;
    this.selectedColor = farbe;
  }

 toggleProductDescription(): void {
    const productDescription = document.getElementById("product_description");
    if (productDescription) {
        if (productDescription.style.display === "none" || productDescription.style.display === "") {
            productDescription.style.display = "block";
        } else {
            productDescription.style.display = "none";
        }
    }
  }




}
