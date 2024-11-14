import { NgOptimizedImage } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    MatToolbar,
    MatButton,
    MatAnchor,
    NgOptimizedImage,
  ],
})
export class AppComponent {
  darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  isDarkTheme = signal(this.darkModeQuery.matches);
  constructor() {
    this.darkModeQuery.addEventListener('change', (event) => {
      this.isDarkTheme.set(event.matches);
    });
  }
}
