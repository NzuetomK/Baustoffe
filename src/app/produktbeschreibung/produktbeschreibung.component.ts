import { Component } from '@angular/core';

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
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMjAzMXxpbWFnZS9qcGVnfGFHTXlMMmcyTlM4NU1EUTJOamMxTURZeU9ERTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5SGNtRnVhWFFnVFdGMGRDNXFjR2N8OTNjM2E4ZTZkZjVmYzk2Yjg4OTIzMTFlYTZiYzQyMDYxOWFmN2M2NWFlOWFmODk4OTNkOTU0OWEzZmY5MzRjMg', farbe:"Granit"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot.jpg?context=bWFzdGVyfHJvb3R8NTE2NzR8aW1hZ2UvanBlZ3xhRGRsTDJnMlpDODVNRFEyTmpjek1EazJOek0wTDFCeWIyUjFZM1F0U0dWeWJ5MVRiV0ZzYkMxRVpYTnJkRzl3TFZSaFlteGxkRjlVVUY5VFkyaHNkWE56WDFOMFlYSk5RVlJVWDNKdmRDNXFjR2N8NDM4NDcxMzQzYzkwYmQwZmIzNTI2YTlmNDY0NDM0YjQ2Mzk5ZGQyM2EzZjlmNzE1MTJhYmMwOWQ2MTMzOWRlZA', farbe:"Klassisch-Rot"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Schiefergrau-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkyMTA3M3xpbWFnZS9qcGVnfGFHUm1MMmczWkM4NU1EUTJOamMxTnpnek56RXdMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5VFkyaHBaV1psY21keVlYVWdUV0YwZEM1cWNHY3w4ZDJkM2UzMTUwZjQ3NzYwZjkyYWUyMDYwMjUxY2MzMjgxNzllYjM5ZGI3YTAwZWQwNWFhNDIxZDAxNjA2ZDJm', farbe:"Schiefergrau"},
    { imageUrl: 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Ziegelrot-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxNDc4M3xpbWFnZS9qcGVnfGFHRTRMMmcxTmk4NU1EUTJOamM0TWpBNE5UUXlMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5YWFXVm5aV3h5YjNRZ1RXRjBkQzVxY0djfDg3OGEzOWY5NmQwYzY3YjJmYTlhYWVmYzk3YWI4OTk4ZjAwMDQzY2RkN2I3MjU2NmVmODA4YTZmMmE1MzA0ZDc', farbe:"Ziegelrot"}
  ];
  selectedImageSrc: string = 'https://store.bmigroup.com/medias/Product-Hero-Small-Desktop-Tablet-TP-Schluss-StarMATT-rot-Granit-Matt.jpg?context=bWFzdGVyfHJvb3R8MTkxMjAzMXxpbWFnZS9qcGVnfGFHTXlMMmcyTlM4NU1EUTJOamMxTURZeU9ERTBMMUJ5YjJSMVkzUXRTR1Z5YnkxVGJXRnNiQzFFWlhOcmRHOXdMVlJoWW14bGRGOVVVRjlUWTJoc2RYTnpYMU4wWVhKTlFWUlVYM0p2ZEY5SGNtRnVhWFFnVFdGMGRDNXFjR2N8OTNjM2E4ZTZkZjVmYzk2Yjg4OTIzMTFlYTZiYzQyMDYxOWFmN2M2NWFlOWFmODk4OTNkOTU0OWEzZmY5MzRjMg';
  selectedColor: string = 'Granit';
  selectedQuantity: number = 1; // Variable für die ausgewählte Menge
  quantityOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() {}

  updateImage(imageUrl: string, farbe: string): void {
    this.selectedImageSrc = imageUrl;
    this.selectedColor = farbe;
  }
}
