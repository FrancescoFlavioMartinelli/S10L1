import { Component } from '@angular/core';
import { PromiseServiceService } from './promise-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'S10L1';

  posts!:any[]

  constructor(private postSrv:PromiseServiceService) {}

  ngOninit() {
    this.postSrv.getActivePosts().then((r)=>{
      this.posts = r


    })
  }


  addPost() {
    this.postSrv.addPost({active:true}).then(res=>{
      this.posts.push(res)
    })
  }

  deletePost(id:number){
    this.postSrv.deletePost(id).then(res=>{
      if(res) console.log("post elimninato");
      else console.log("Errore");
      
    })
  }
 }
