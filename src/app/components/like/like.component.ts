import { Component } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  addLike(item){
    item.likes++;
  }
  removeLike(){
    item.likes--;
  }
}
