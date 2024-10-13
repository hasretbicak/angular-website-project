import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = ''; 
  articles: any[] = []; 

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      if (this.searchTerm) {
        this.fetchArticles(); 
      }
    });
  }

  fetchArticles(): void {
   
    const url = `https://newsapi.org/v2/top-headlines?country=us&q=${this.searchTerm}&apiKey=e6e0446c586b4076992762066a660c2c`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.articles = data.articles || []; 
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        this.articles = [];
      });
  }

  onSearch(event: Event): void {
    event.preventDefault(); 
    this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } }); 
  }
}
