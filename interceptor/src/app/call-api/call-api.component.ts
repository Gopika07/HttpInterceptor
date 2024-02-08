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
export class CallApiComponent implements OnInit {

  public getData: any;
    constructor(private http: HttpClient){

    }

    ngOnInit(): void{
      this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      this.getData = data;
      })
    }

    public getApi(){
      console.log(this.getData);
    }
}
