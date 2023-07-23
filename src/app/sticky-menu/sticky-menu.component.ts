import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.scss']
})
export class StickyMenuComponent {

  isMenuOpen: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
