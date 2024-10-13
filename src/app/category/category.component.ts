import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  articles: any[] = [];
  category: string = 'business'; // Varsayılan kategori

  constructor() { }

  ngOnInit(): void {
    this.getArticles(this.category);
  }

  getArticles(category: string) {
    const apiKey = 'e6e0446c586b4076992762066a660c2c'; // API anahtarınızı buraya ekleyin
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        this.articles = data.articles;
      })
      .catch(error => console.error('Error fetching articles:', error));
  }

  changeCategory(newCategory: string) {
    this.category = newCategory;
    this.getArticles(this.category);
  }
}
