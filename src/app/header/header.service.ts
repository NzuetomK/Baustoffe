import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {}
}
