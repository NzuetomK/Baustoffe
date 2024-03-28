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
    const storedColor = localStorage.getItem('selectedColor');
    const storedImageSrc = localStorage.getItem('selectedImageSrc');


      if (productId === '1') {
      this.items = [
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm', farbe:"Granit"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8MTk5NDN8aW1hZ2UvanBlZ3xhRGhsTDJneU5TODVNRFEyTlRVMk9UQXhOREEyTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5CbnxhZGVlMzk1MzZhN2RlY2NiNjA5NGQ3MzE2ZjBlMDNiN2JlNjE0M2U2MTYwYWY5YzU0MWE4YTlkOTI1MDYzY2U3', farbe:"Klassisch-Rot"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schiefergrau.jpg?context=bWFzdGVyfHJvb3R8NDQ3NTl8aW1hZ2UvanBlZ3xhRFEzTDJoalpDODVNRFEyTmpjeU16YzFPRE00TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHBaV1psY21keVlYVXVhbkJufGRlYjgzMzI2YzFkMWI1N2Y5MmI1MDZhMDQ0YWUxZDY0NDM3OTViZGE2MzJmY2RmMTdhMzljOGVmZjUxYzdiZWQ', farbe:"Schiefergrau"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Ziegelrot.jpg?context=bWFzdGVyfHJvb3R8NDU3Njh8aW1hZ2UvanBlZ3xhR0UwTDJnMk9DODVNRFEyTmpnek1qVTBPREUwTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5YWFXVm5aV3h5YjNRdWFuQm58NGYwMDEzNTkzOWVlNTdlYWMyN2QwMGM1MGU3OTZkZjcyODIyYWJmYWFhZDhkOTU5ZjgyMTYzYjVmNzcyODYzMg', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 16.99;
      this.totalPrice = 16.99;

      // Weisen Sie die im localStorage gespeicherten Werte zu, wenn vorhanden
      if (storedColor && storedImageSrc) {
        this.selectedColor = storedColor;
        this.selectedImageSrc = storedImageSrc;
      } else {
        // Wenn keine Werte im localStorage vorhanden sind, setzen Sie Standardwerte
        this.selectedColor = 'Granit';
        this.selectedImageSrc = 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Granit.jpg?context=bWFzdGVyfHJvb3R8Mzc3ODl8aW1hZ2UvanBlZ3xhRFUyTDJnNE5TODVNRFEyTlRVM05qSXlNekF5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGNtRnVhWFF1YW5Cbnw4NGZjMmQwZmExNTU0ZWEwZTA0ODIwNGYwMGI3ZGQ3N2JmNzViOTA4NDZhYTQ1OWJiZGJlNjNmZTQ5MzcxZjJm';
      }
      this.name = 'Taunus Pfanne';
      this.price = 16.99;

    } else if (productId === '2') {
      this.items = [
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMjAzMXxpbWFnZS9qcGVnfGFHTXlMMmcyTlM4NU1EUTJOamMxTURZeU9ERTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5SGNtRnVhWFFnVFdGMGRDNXFjR2N8OTNjM2E4ZTZkZjVmYzk2Yjg4OTIzMTFlYTZiYzQyMDYxOWFmN2M2NWFlOWFmODk4OTNkOTU0OWEzZmY5MzRjMg', farbe:"Granit"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NTE2NzR8aW1hZ2UvanBlZ3xhRGRsTDJnMlpDODVNRFEyTmpjek1EazJOek0wTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHNkWE56WDFOMFlYSk5RVlJVWDNKdmRDNXFjR2N8NDM4NDcxMzQzYzkwYmQwZmIzNTI2YTlmNDY0NDM0YjQ2Mzk5ZGQyM2EzZjlmNzE1MTJhYmMwOWQ2MTMzOWRlZA', farbe:"Klassisch-Rot"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkyMTA3M3xpbWFnZS9qcGVnfGFHUm1MMmczWkM4NU1EUTJOamMxTnpnek56RXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4ZDJkM2UzMTUwZjQ3NzYwZjkyYWUyMDYwMjUxY2MzMjgxNzllYjM5ZGI3YTAwZWQwNWFhNDIxZDAxNjA2ZDJm', farbe:"Schiefergrau"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNDc4M3xpbWFnZS9qcGVnfGFHRTRMMmcxTmk4NU1EUTJOamM0TWpBNE5UUXlMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5YWFXVm5aV3h5YjNRZ1RXRjBkQzVxY0djfDg3OGEzOWY5NmQwYzY3YjJmYTlhYWVmYzk3YWI4OTk4ZjAwMDQzY2RkN2I3MjU2NmVmODA4YTZmMmE1MzA0ZDc', farbe:"Ziegelrot"}
      ];

      this.pricePerItem = 15.97;
      this.totalPrice = 15.97;
      this.name = 'Taunus Pfanne Schlussstein links';
      this.price = 15.97;


      // Verwendung der Wert des `selectedColor` aus dem localStorage als Standardwert
      this.selectedColor = storedColor || this.selectedColor;
      this.selectedImageSrc = storedImageSrc || this.selectedImageSrc;

    } else if (productId === '3') {
      this.items = [
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMzE0NHxpbWFnZS9qcGVnfGFEQmpMMmd4TWk4NU1EUTJOVFE0TWpVd05qVTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMGR5WVc1cGRDQk5ZWFIwTG1wd1p3fDY3MWIyZDczNGY1NjM3NmNlMTJiZmNiNjI5NjY0ZTk4Mzc4ZDI2Y2E3YTM3NTJhODRmNjNiYmIxZDBjZTJhODI', farbe:"Granit"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NDE2NDl8aW1hZ2UvanBlZ3xhRGszTDJoaFpDODVNRFEyTlRRMk9EQTRPRFl5TDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5SGFXVmlaV3hmT0N3NFRFbGZVM1JoY2sxQlZGUmZjbTkwTG1wd1p3fGE0NzU3MmEyN2Q4NmVkOWYyMmZjYjZiYmY2NGQyMDMwMTNkOWQ2MzBjZWNmNWZhYjk0YzJlZDE2YWFiOTRjYTc', farbe:"Klassisch-Rot"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNTk0MnxpbWFnZS9qcGVnfGFESmhMMmd5WVM4NU1EUTJOVFE0T1RjeE5UVXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMU5qYUdsbFptVnlaM0poZFNCTllYUjBMbXB3Wnd8ZmNjMDIzYmIxZjk2NDY0OTdiN2MxY2QwMjI2YjQxOTVjOTQ3M2ZlMjVkZGM2MGQ5YjQ1Nzg3OTVlNzc1NzYzMQ', farbe:"Schiefergrau"},
        { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Giebel-8-8LI-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkwOTM3OHxpbWFnZS9qcGVnfGFEWTJMMmd3Tmk4NU1EUTJOVFV4TVRNME1qTTRMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlIYVdWaVpXeGZPQ3c0VEVsZlUzUmhjazFCVkZSZmNtOTBYMXBwWldkbGJISnZkQ0JOWVhSMExtcHdad3wxOTY5MTUzZmQ0MmQyNzJlZDlhODQxZWM1ZWQ5MGJkZWEyZjRkNGVlMjlmZTljMzcxOWFmNzkzNjBhMmQ1MmMw', farbe:"Ziegelrot"}
      ];
      this.pricePerItem = 19.84;
      this.totalPrice = 19.84;
      this.name = 'Taunus Pfanne Giebelstein links';
      this.price = 19.84;

      this.selectedColor = storedColor || this.selectedColor;
      this.selectedImageSrc = storedImageSrc || this.selectedImageSrc;
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

    switch (this.productId) {
      case '1':
        localStorage.setItem('selectedColor', this.selectedColor);
        localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
        this.defautQuantity = 1;
        break;
      case '2':
        localStorage.setItem('selectedColor', this.selectedColor);
        localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
        this.defautQuantity++;
        break;
      case '3':
        localStorage.setItem('selectedColor', this.selectedColor);
        localStorage.setItem('selectedImageSrc', this.selectedImageSrc);
        this.defautQuantity++;
        break;
      default:
        break;
    }
    // Erhöhen Sie die Anzahl der Produkte im Warenkorb um 1
    // this.selectedQuantity++;
    // Aktualisieren Sie den Wert in Ihrem QuantityService
    this.quantityService.setSelectedQuantity(this.defautQuantity);

    console.log('Menge zum Einkaufswagen hinzugefügt. Aktuelle Menge:', this.selectedQuantity);

    // Zeigen Sie das Bestätigungs-Symbol für eine kurze Zeit an
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
