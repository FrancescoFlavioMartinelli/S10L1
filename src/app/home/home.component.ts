import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x = 0;

  constructor(private counterSrv:CounterService) { }

  ngOnInit(): void {
    // this.x = this.counterSrv.counter
    this.counterSrv.counterObs.subscribe((e)=>{
      this.x = e
    })
  }

  like() {
    this.counterSrv.addCounter()
    // this.x++
  }

}
