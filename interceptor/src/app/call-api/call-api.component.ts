import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-api.component.html',
  styleUrl: './call-api.component.scss'
})
export class CallApiComponent {


  constructor(private http: HttpClient){

  }

    public getApi(){
      this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      console.log(data);
      })
    }

    public mockApi(){
      this.http.get('https://jsonplaceholder.typicode.com/invalidddd').subscribe((data) => {
        console.log(data);
      })
    }
}
