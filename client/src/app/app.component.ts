import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  Users: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/Users').subscribe({
      next: response => this.Users = response,
      error: Error => console.log(Error),
      complete: () => console.log('Request Has Completed')
    })
  }
}