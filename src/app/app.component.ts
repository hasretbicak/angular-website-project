import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles: any[] = [];
  private apiKey = 'e6e0446c586b4076992762066a660c2c'; // API anahtarınızı buraya ekleyin
  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.apiKey;

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.articles = data.articles;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
}
