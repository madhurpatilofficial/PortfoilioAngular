// navbar.component.ts
import { Component } from '@angular/core';
import { SmoothScrollService } from '../smooth-scroll.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private smoothScrollService: SmoothScrollService) {

  }


  scrollToSection(sectionId: string): void {
    this.smoothScrollService.scrollToSection(sectionId);
  }


}
