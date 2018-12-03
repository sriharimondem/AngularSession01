import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  username = 'srihari';
  httpData;
  constructor(private http: Http) {}
  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users')
    .map((response) => response.json()).subscribe((data) => this.displayData(data));
  }
  displayData(data) {
    this.httpData = data;
    console.log(data);
  }
}
