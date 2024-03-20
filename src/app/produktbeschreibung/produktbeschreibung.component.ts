import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';

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
  items: Produktbeschreibung[] = [
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm', farbe:"Granit"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8MTk5NDN8aW1hZ2UvanBlZ3xhRGhsTDJneU5TODVNRFEyTlRVMk9UQXhOREEyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5CbnxhZGVlMzk1MzZhN2RlY2NiNjA5NGQ3MzE2ZjBlMDNiN2JlNjE0M2U2MTYwYWY5YzU0MWE4YTlkOTI1MDYzY2U3', farbe:"Klassisch-Rot"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schiefergrau.jpg?context=bWFzdGVyfHJvb3R8NDQ3NTl8aW1hZ2UvanBlZ3xhRFEzTDJoalpDODVNRFEyTmpjeU16YzFPRE00TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHBaV1psY21keVlYVXVhbkJufGRlYjgzMzI2YzFkMWI1N2Y5MmI1MDZhMDQ0YWUxZDY0NDM3OTViZGE2MzJmY2RmMTdhMzljOGVmZjUxYzdiZWQ', farbe:"Schiefergrau"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Ziegelrot.jpg?context=bWFzdGVyfHJvb3R8NDU3Njh8aW1hZ2UvanBlZ3xhR0UwTDJnMk9DODVNRFEyTmpnek1qVTBPREUwTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5YWFXVm5aV3h5YjNRdWFuQm58NGYwMDEzNTkzOWVlNTdlYWMyN2QwMGM1MGU3OTZkZjcyODIyYWJmYWFhZDhkOTU5ZjgyMTYzYjVmNzcyODYzMg', farbe:"Ziegelrot"}
  ];
  selectedImageSrc: string = 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm';
  selectedColor: string = 'Granit';

   // Variable für die ausgewählte Menge
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  selectedQuantity: number;

  // Preis pro Artikel in Euro
  pricePerItem: number = 16.99;

  // Gesamtpreis
  totalPrice: number = 16.99;

  constructor(private quantityService: QuantityService) {
    this.selectedQuantity = 1;
    this.calculateTotalPrice();
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
    console.log('Menge zum Einkaufswagen hinzufügen:', this.selectedQuantity);
    this.quantityService.setSelectedQuantity(this.selectedQuantity);
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
