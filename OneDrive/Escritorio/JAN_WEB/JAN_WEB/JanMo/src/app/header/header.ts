import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isMenuOpen = false; // <-- NUEVO: estado del menú hamburguesa

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
