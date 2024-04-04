import { Component } from '@angular/core';
import { QuantityService } from '../quantity.service';
import { ActivatedRoute } from '@angular/router';
import { ProduktService } from '../produkt.service';

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

  defaultColor: string = '';
  defaultImage: string = '';
  defautQuantity: number = 0;
  price: number = 0;
  name: string = "";

  showCheckIcon: boolean = false;
  checkIcon: string = "pi pi-check";
  productId: string = '';

  totalOrders: number = 0;

  constructor(private route: ActivatedRoute, private quantityService: QuantityService, private produktService: ProduktService) {
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

    // Zuerst versuchen, die Werte aus dem localStorage abzurufen
    let storedColor = localStorage.getItem('selectedColor');
    let storedImageSrc = localStorage.getItem('selectedImageSrc');


      if (productId === '1') {
      this.items = [
        { imageUrl: 'assets/images/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg', farbe:"Granit"},
        { imageUrl: 'assets/images/bmi-braas-taunus-pfanne-dachstein-ausfuehrung-starmatt-farbe-klassisch-rot.jpg', farbe:"Klassisch-Rot"},
        { imageUrl: 'assets/images/Product-Hero-Small-Desktop-Tablet-TP-Schiefergrau.jpg', farbe:"Schiefergrau"},
        { imageUrl: 'assets/images/Product-Hero-Small-Desktop-Tablet-TP-Ziegelrot.jpg', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 0.86;
      this.totalPrice = 0.86;

      // Weisen Sie die im localStorage gespeicherten Werte zu, wenn vorhanden
      if (storedColor && storedImageSrc) {
        this.selectedColor = storedColor || this.selectedColor;
        for(let i = 0; i<4; i++){
          if(this.selectedColor === this.items[i].farbe){
          this.selectedImageSrc = this.items[i].imageUrl
          }
        }

      } else {
        // Wenn keine Werte im localStorage vorhanden sind, setzen Sie Standardwerte
        this.selectedColor = 'Granit';
        this.selectedImageSrc = 'assets/images/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg';

      }
      this.name = 'Taunus Pfanne';
      this.price = 0.86;
    } else if (productId === '3') {

      this.items = [

        { imageUrl: 'assets/images/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Granit-Matt.jpg', farbe:"Granit"},
        { imageUrl: 'assets/images/Product--rot.jpg', farbe:"Klassisch-Rot"},
        { imageUrl: 'assets/images/Product-Schiefergrau-Matt.jpg', farbe:"Schiefergrau"},
        { imageUrl: 'assets/images/Product-Tiefrot-Matt.jpg', farbe:"Ziegelrot"},
        // { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Kupfer-Matt.jpg?context=bWFzdGVyfHJvb3R8NDE4MTV8aW1hZ2UvanBlZ3xhRGxpTDJnM1l5ODVNRFF3T0RFMU56VXhNVGs0TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlDY21GaGMxOUdhWEp6ZEY5TlFWUlVYM0p2ZEY5TGRYQm1aWElnVFdGMGRDNXFjR2N8ZWNlYjczYWUxYzFhMjMyNDQ2ZGE0ODQ1MWNiMTJiZWViYjY5YTMxOTA0MTYyOGJlZDA1NTNmMmZkMDc0YTI3YQ', farbe:"Kupfer"},
        // { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Steingrau-Matt.jpg?context=bWFzdGVyfHJvb3R8NDIzMDl8aW1hZ2UvanBlZ3xhRFkzTDJoaE9TODVNRFF3T0RFM09URXpPRGcyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlDY21GaGMxOUdhWEp6ZEY5TlFWUlVYM0p2ZEY5VGRHVnBibWR5WVhVZ1RXRjBkQzVxY0djfDkyZTc4NGNmMzlmNWFkNzBkYmY3MzgwNTliOWJmOGM4MGE1MjliYjJjOTZjY2EyOTBhMDE4ZmVmODQ3N2M3MjE', farbe:"Steingrau"},
        // { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Bordeaux-Matt.jpg?context=bWFzdGVyfHJvb3R8NDQ4MDh8aW1hZ2UvanBlZ3xhRGMyTDJnMVpDODVNRFF3T0RFek5UZzROVEV3TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlDY21GaGMxOUdhWEp6ZEY5TlFWUlVYM0p2ZEY5Q2IzSmtaV0YxZUNCTllYUjBMbXB3Wnd8YmY2NzI0ZmM4NjI2ZjYyOTE5NDM3YzU2ZWQ5ZTgyNGY2MTI1ZDRiZDc2YTMyZjllZmYwMjdhNjc1N2VjMTVjNA', farbe:"Bordeaux"},
        // { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Dunkelbraun-Matt.jpg?context=bWFzdGVyfHJvb3R8NDUwMzR8aW1hZ2UvanBlZ3xhR0V5TDJnd05DODVNRFF3T0RFME16QTVOREEyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlDY21GaGMxOUdhWEp6ZEY5TlFWUlVYM0p2ZEY5RWRXNXJaV3hpY21GMWJpQk5ZWFIwTG1wd1p3fDIzZmJkZWMzNWY0ZDk3ZjI2YTY5YWM4MjYyMWU1MGU4OTc2MGM2MDk1NDg3MzA1NjI1MWI4NTk4Zjg0MjQ5OWU', farbe:"Dunkelbraun"},
      ];

      this.pricePerItem = 8.50;
      this.totalPrice = 8.50;
      this.name = 'Taunus Pfanne Firststein';
      this.price = 8.50;


      // Verwendung der Wert des `selectedColor` aus dem localStorage als Standardwert

      if (storedColor && storedImageSrc) {
      this.selectedColor = storedColor || this.selectedColor;

      for(let i = 0; i<4; i++){
        if(this.selectedColor === this.items[i].farbe){
          this.selectedImageSrc = this.items[i].imageUrl
        }
      }
    }else {
      // Wenn keine Werte im localStorage vorhanden sind, setzen Sie Standardwerte
      this.selectedColor = 'Granit';
      this.selectedImageSrc = 'assets/images/Product-Hero-Small-Desktop-Tablet-Braas-First-MATT-rot-Granit-Matt.jpg';

    }

    } else if (productId === '2') {
      this.items = [
        { imageUrl: 'assets/images/Pro-rot-Granit-Matt.jpg', farbe:"Granit"},
        { imageUrl: 'assets/images/Product-StarMATT-rot.jpg', farbe:"Klassisch-Rot"},
        { imageUrl: 'assets/images/Product-StarMATT-rot-Schiefergrau-Matt.jpg', farbe:"Schiefergrau"},
        { imageUrl: 'assets/images/Product-StarMATT-rot-Ziegelrot-Matt.jpg', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 10.90;
      this.totalPrice = 10.90;
      this.name = 'Taunus Pfanne Giebelstein links';
      this.price = 10.90;

      if (storedColor && storedImageSrc) {
      this.selectedColor = storedColor || this.selectedColor;
      for(let i = 0; i<4; i++){
        if(this.selectedColor === this.items[i].farbe){
          this.selectedImageSrc = this.items[i].imageUrl
        }
      }
    }else {
      // Wenn keine Werte im localStorage vorhanden sind, setzen Sie Standardwerte
      this.selectedColor = 'Granit';
      this.selectedImageSrc = 'assets/images/Pro-rot-Granit-Matt.jpg';

    }
  }
}
// else if (productId === '4') {
//   this.items = [
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMzE0NHxpbWFnZS9qcGVnfGFEQmpMMmd4TWk4NU1EUTJOVFE0TWpVd05qVTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMGR5WVc1cGRDQk5ZWFIwTG1wd1p3fDY3MWIyZDczNGY1NjM3NmNlMTJiZmNiNjI5NjY0ZTk4Mzc4ZDI2Y2E3YTM3NTJhODRmNjNiYmIxZDBjZTJhODI', farbe:"Granit"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NDE2NDl8aW1hZ2UvanBlZ3xhRGszTDJoaFpDODVNRFEyTlRRMk9EQTRPRFl5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGFXVmlaV3hmT0N3NFRFbGZVM1JoY2sxQlZGUmZjbTkwTG1wd1p3fGE0NzU3MmEyN2Q4NmVkOWYyMmZjYjZiYmY2NGQyMDMwMTNkOWQ2MzBjZWNmNWZhYjk0YzJlZDE2YWFiOTRjYTc', farbe:"Klassisch-Rot"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNTk0MnxpbWFnZS9qcGVnfGFESmhMMmd5WVM4NU1EUTJOVFE0T1RjeE5UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZmNjMDIzYmIxZjk2NDY0OTdiN2MxY2QwMjI2YjQxOTVjOTQ3M2ZlMjVkZGM2MGQ5YjQ1Nzg3OTVlNzc1NzYzMQ', farbe:"Schiefergrau"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwOTM3OHxpbWFnZS9qcGVnfGFEWTJMMmd3Tmk4NU1EUTJOVFV4TVRNME1qTTRMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMXBwWldkbGJISnZkQ0JOWVhSMExtcHdad3wxOTY5MTUzZmQ0MmQyNzJlZDlhODQxZWM1ZWQ5MGJkZWEyZjRkNGVlMjlmZTljMzcxOWFmNzkzNjBhMmQ1MmMw', farbe:"Ziegelrot"}
//   ];
//   this.pricePerItem = 19.84;
//   this.totalPrice = 19.84;
//   this.name = 'Taunus Pfanne Giebelstein links';
//   this.price = 19.84;

//   this.selectedColor = storedColor || this.selectedColor;
//   this.selectedImageSrc = storedImageSrc || this.selectedImageSrc;
// }
// else if (productId === '5') {
//   this.items = [
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMzE0NHxpbWFnZS9qcGVnfGFEQmpMMmd4TWk4NU1EUTJOVFE0TWpVd05qVTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMGR5WVc1cGRDQk5ZWFIwTG1wd1p3fDY3MWIyZDczNGY1NjM3NmNlMTJiZmNiNjI5NjY0ZTk4Mzc4ZDI2Y2E3YTM3NTJhODRmNjNiYmIxZDBjZTJhODI', farbe:"Granit"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NDE2NDl8aW1hZ2UvanBlZ3xhRGszTDJoaFpDODVNRFEyTlRRMk9EQTRPRFl5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGFXVmlaV3hmT0N3NFRFbGZVM1JoY2sxQlZGUmZjbTkwTG1wd1p3fGE0NzU3MmEyN2Q4NmVkOWYyMmZjYjZiYmY2NGQyMDMwMTNkOWQ2MzBjZWNmNWZhYjk0YzJlZDE2YWFiOTRjYTc', farbe:"Klassisch-Rot"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNTk0MnxpbWFnZS9qcGVnfGFESmhMMmd5WVM4NU1EUTJOVFE0T1RjeE5UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZmNjMDIzYmIxZjk2NDY0OTdiN2MxY2QwMjI2YjQxOTVjOTQ3M2ZlMjVkZGM2MGQ5YjQ1Nzg3OTVlNzc1NzYzMQ', farbe:"Schiefergrau"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwOTM3OHxpbWFnZS9qcGVnfGFEWTJMMmd3Tmk4NU1EUTJOVFV4TVRNME1qTTRMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMXBwWldkbGJISnZkQ0JOWVhSMExtcHdad3wxOTY5MTUzZmQ0MmQyNzJlZDlhODQxZWM1ZWQ5MGJkZWEyZjRkNGVlMjlmZTljMzcxOWFmNzkzNjBhMmQ1MmMw', farbe:"Ziegelrot"}
//   ];
//   this.pricePerItem = 19.84;
//   this.totalPrice = 19.84;
//   this.name = 'Taunus Pfanne Giebelstein links';
//   this.price = 19.84;

//   this.selectedColor = storedColor || this.selectedColor;
//   this.selectedImageSrc = storedImageSrc || this.selectedImageSrc;
// }
// else if (productId === '6') {
//   this.items = [
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMzE0NHxpbWFnZS9qcGVnfGFEQmpMMmd4TWk4NU1EUTJOVFE0TWpVd05qVTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMGR5WVc1cGRDQk5ZWFIwTG1wd1p3fDY3MWIyZDczNGY1NjM3NmNlMTJiZmNiNjI5NjY0ZTk4Mzc4ZDI2Y2E3YTM3NTJhODRmNjNiYmIxZDBjZTJhODI', farbe:"Granit"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NDE2NDl8aW1hZ2UvanBlZ3xhRGszTDJoaFpDODVNRFEyTlRRMk9EQTRPRFl5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGFXVmlaV3hmT0N3NFRFbGZVM1JoY2sxQlZGUmZjbTkwTG1wd1p3fGE0NzU3MmEyN2Q4NmVkOWYyMmZjYjZiYmY2NGQyMDMwMTNkOWQ2MzBjZWNmNWZhYjk0YzJlZDE2YWFiOTRjYTc', farbe:"Klassisch-Rot"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNTk0MnxpbWFnZS9qcGVnfGFESmhMMmd5WVM4NU1EUTJOVFE0T1RjeE5UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZmNjMDIzYmIxZjk2NDY0OTdiN2MxY2QwMjI2YjQxOTVjOTQ3M2ZlMjVkZGM2MGQ5YjQ1Nzg3OTVlNzc1NzYzMQ', farbe:"Schiefergrau"},
//     { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwOTM3OHxpbWFnZS9qcGVnfGFEWTJMMmd3Tmk4NU1EUTJOVFV4TVRNME1qTTRMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMXBwWldkbGJISnZkQ0JOWVhSMExtcHdad3wxOTY5MTUzZmQ0MmQyNzJlZDlhODQxZWM1ZWQ5MGJkZWEyZjRkNGVlMjlmZTljMzcxOWFmNzkzNjBhMmQ1MmMw', farbe:"Ziegelrot"}
//   ];
//   this.pricePerItem = 19.84;
//   this.totalPrice = 19.84;
//   this.name = 'Taunus Pfanne Giebelstein links';
//   this.price = 19.84;

//   this.selectedColor = storedColor || this.selectedColor;
//   this.selectedImageSrc = storedImageSrc || this.selectedImageSrc;
// }


// Berechnung des Gesamtpreises basierend auf dem Preis pro Artikel und der ausgewählten Menge
calculateTotalPrice() {
  this.totalPrice = this.pricePerItem * this.selectedQuantity;
}

// Diese Funktion wird aufgerufen, wenn sich die ausgewählte Menge ändert
onQuantityChange() {
  // Berechnen Sie den Gesamtpreis erneut
  this.calculateTotalPrice();
}

addToCart(): void {
  let ordersForCurrentProduct = localStorage.getItem('totalOrders'); // Initialisez ordersForCurrentProduct à 1 puisque vous ajoutez un produit à la fois
  let result = 0;

  if(!ordersForCurrentProduct){
    result = 1;
    // Convertir le nombre total de commandes en une chaîne de caractères avant de l'enregistrer
    localStorage.setItem('totalOrders', result.toString());
    }
    else{
      result = Number(ordersForCurrentProduct) ;
      result++;
      localStorage.setItem('totalOrders', result.toString())
    }

  switch (this.productId) {
      case '1':
          localStorage.setItem('selectedColor', this.selectedColor);
          localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
          break;
      case '2':

          localStorage.setItem('selectedColor', this.selectedColor);
          localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
          break;
      case '3':
          localStorage.setItem('selectedColor', this.selectedColor);
          localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
          break;
      default:
          break;
  }

  // Mettez à jour la quantité sélectionnée en utilisant le service QuantityService (si nécessaire)
  this.quantityService.setSelectedQuantity(result);

  console.log('Quantité ajoutée au panier. Quantité actuelle :', ordersForCurrentProduct);

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
