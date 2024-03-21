import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduktService {
  private apiUrl = 'https://api.example.com/produkte';

  constructor(private http: HttpClient) { }
  // Methode zum Abrufen von Produktinformationen basierend auf der Produkt-ID
  getProductDescription(productId: string): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(url);
  }
}
