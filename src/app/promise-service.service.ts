import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseServiceService {

  url = "/posts"

  posts: Post[] = []

  constructor() {}

  getPosts() {
    return fetch(this.url).then(res => res.json())
  }

  getActivePosts() {
    return fetch(this.url).then(res => res.json()).then((res: Post[]) => {
      return res.filter(r => r.active)
    })
  }

  deletePost(id:number):Promise<Post[]|null> {
    return fetch(`${this.url}/${id}`, {method:"DELETE"}).then(res=>res.ok?res.json():null)
  }


  addPost(p: Post) {
    return new Promise((succ, err) => {
      setTimeout(() => {
        this.posts.push(p)
        succ(p)
      }, 2000)
    })
  }

}

export interface Post {
  active: boolean
}
