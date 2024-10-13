import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild('newsHeader') newsHeader!: ElementRef; 
  articles: any[] = []; // Haberleri tutan dizi
  totalResults: number = 0;  // Toplam haber sayısı
  pageSize: number = 10; // Her sayfada gösterilecek haber sayısı
  currentPage: number = 1; // Mevcut sayfa numarası

  apiKey: string = 'e6e0446c586b4076992762066a660c2c'; // API anahtarınızı buraya girin

  constructor() {}

  ngOnInit(): void {
    this.fetchNews(); // İlk sayfa için haberleri çek
  }

  fetchNews(): void {
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${this.pageSize}&page=${this.currentPage}&apiKey=${this.apiKey}`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.articles = data.articles; 
        this.totalResults = data.totalResults; 
        this.totalResults = data.totalResults - 3; 
        this.articles = data.articles.slice(3);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  changePage(page: number): void {
    this.currentPage = page; 
    this.fetchNews(); 
    this.scrollToHeader(); 
  }

  scrollToHeader(): void {
    setTimeout(() => {
      if (this.newsHeader) {
        this.newsHeader.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Gecikme süresi 0ms
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / this.pageSize); 
  }
}
