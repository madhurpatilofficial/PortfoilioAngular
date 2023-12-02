// src/app/scroll.service.ts
import { Injectable, HostListener, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollEvent = new EventEmitter<number>();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollEvent.emit(scrollPosition);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
