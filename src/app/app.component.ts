import { Component, ElementRef, AfterViewInit, Renderer2, NgZone, OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private scrollService: ScrollService,
    private router: Router,
    private zone: NgZone
  ) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  scrollPosition: number = 0;

  ngOnInit(): void {
    this.scrollService.scrollEvent.subscribe((scrollPosition) => {
      this.zone.run(() => {
        this.scrollPosition = scrollPosition;
      });
    });
  }
}