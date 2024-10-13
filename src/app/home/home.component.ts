import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Gerekli özellikler burada
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    // Başka işlemler yapabilirsiniz
  }
}
