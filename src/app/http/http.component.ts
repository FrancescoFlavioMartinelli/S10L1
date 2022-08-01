import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  todos!:Todo[] 

  todoRequest!:Subscription

  constructor(private httpSrv:HttpService) { }

  ngOnInit(): void {
    // let obs = this.httpSrv.getTodos()
    // this.todoRequest = obs.subscribe((res)=>{
    //   console.log(res)
    //   this.todos = res
    //   alert("Caricamento completato!")
    // });
    let s = this.httpSrv.getTodos().subscribe((res)=>{})
  }

  ngOnDestroy() {
    this.todoRequest.unsubscribe();
  }

  eliminaTodo(id:number) {
    if(confirm("sei sicuro di voler eliminare?"))
    this.httpSrv.deleteTodo(id).subscribe()
  }

}
interface Todo {
  id:number,
  title:string
}