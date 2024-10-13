import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeRoute: string = 'home'; // Başlangıçta 'home' sayfası aktif

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects.split('/')[1]; // Aktif route'u alıyoruz
      }
    });
  }

  ngOnInit(): void {}

  onSearch(event: Event): void { // event türünü Event olarak değiştirin
    event.preventDefault(); // formun submit olmasını engeller
    const inputElement = (event.target as HTMLFormElement).querySelector('input') as HTMLInputElement; // input elementini al
    const searchTerm = inputElement.value.trim(); // değeri al
  
    if (searchTerm) {
      this.router.navigate(['/search'], { queryParams: { q: searchTerm } }); // arama sayfasına yönlendir
    }
  }
}
