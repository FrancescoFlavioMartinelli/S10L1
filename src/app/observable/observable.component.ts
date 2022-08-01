import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  x:number = 0

  m=0;
  s=0;

  obs!:Observable<number[]>

  sub!:Subscription


  constructor() { }

  ngOnInit(): void {
    this.obs = new Observable((subscriber)=>{
      let [min, sec] = [0, 0]
      setInterval(()=>{
        sec++;if(sec == 60) {sec = 0; min++}
        subscriber.next([min, sec])
        // if(i == 5){subscriber.complete()}
      }, 1000)
    })
  }

  start() {
    this.sub = this.obs.subscribe((res)=>{
      this.m = res[0]
      this.s = res[1]
    })
    let subscr = this.obs.subscribe((res)=>{
      console.log(res)
    })
  }

  ngOnDestroy(){
    // this.sub.unsubscribe()
  }



}
