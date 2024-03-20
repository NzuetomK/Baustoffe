import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  private selectedQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  selectedQuantity$: Observable<number> = this.selectedQuantitySubject.asObservable();

  constructor() {}

  setSelectedQuantity(quantity: number): void {
    this.selectedQuantitySubject.next(quantity);
  }
}
