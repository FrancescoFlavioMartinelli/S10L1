import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  counterSub = new Subject<number>();
  counterObs = this.counterSub.asObservable();

  obs!:Observable<number>

  constructor() {
  }

  addCounter() {
    this.counter++
    this.counterSub.next(this.counter)
  }
}
