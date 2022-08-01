import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  counter = 0

  constructor(private http:HttpClient) { }

  getTodos(){
    let obs = this.http.get<any[]>('http://localhost:3000/todos')
    return obs
  }

  deleteTodo(id:number){
    return this.http.delete<any>('http://localhost:3000/todos/'+id)
  }
}
