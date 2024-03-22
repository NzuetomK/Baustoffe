import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {
  selectedColors: { [productId: string]: string } = {};
  selectedImageSrcs: { [productId: string]: string } = {}; // Speichert ausgewählte Bild-URLs für jede Produkt-ID

  constructor() { }

  // Setter-Funktionen für ausgewählte Farbe und Bild-URL
  setSelectedColor(productId: string, color: string): void {
    this.selectedColors[productId] = color;
  }

  setSelectedImageSrc(productId: string, imageSrc: string): void {
    this.selectedImageSrcs[productId] = imageSrc;
  }

  // Getter-Funktionen für ausgewählte Farbe und Bild-URL
  getSelectedColor(productId: string): string {
    return this.selectedColors[productId] || '';
  }

  getSelectedImageSrc(productId: string): string {
    return this.selectedImageSrcs[productId] || '';
  }

}
