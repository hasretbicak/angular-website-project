import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '5343fc8e8f5e4224bc40998fa6eceed9'; // Buraya gerçek API anahtarınızı koyun.
  private apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
  private baseUrl = 'https://newsapi.org/v2/top-headlines?country=us';

  

  constructor() {}
 
    // Tüm başlıkları almak için metot
    async getTopHeadlines(page: number = 1, pageSize: number = 20): Promise<any> {
      const response = await fetch(`${this.baseUrl}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  
    // Belirli bir kategoriye göre başlık almak için metot
    async getCategoryHeadlines(category: string, page: number = 1, pageSize: number = 20): Promise<any> {
      const response = await fetch(`${this.baseUrl}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
}
