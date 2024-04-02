import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  private selectedQuantitySubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  selectedQuantity$: Observable<number> = this.selectedQuantitySubject.asObservable();
  totalOrders: number = 0;

  constructor() {}

  setSelectedQuantity(quantity: number): void {
    this.selectedQuantitySubject.next(quantity);
  }


  public getTotalOrders(): number {
    return this.totalOrders;
  }

  public incrementTotalOrders(): void {
    this.totalOrders++;
  }

  public decrementTotalOrders(): void {
    if (this.totalOrders > 0) {
      this.totalOrders--;
    }
  }

  public resetTotalOrders(): void {
    this.totalOrders = 0;
  }
}
