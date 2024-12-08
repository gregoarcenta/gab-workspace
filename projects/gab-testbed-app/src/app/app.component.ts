import { Component, signal } from '@angular/core';

import { GabSideMenuComponent, TitleColor } from 'gab-side-menu';

@Component({
  selector: 'app-root',
  imports: [GabSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAuthenticated = signal(false);
  TitleColor = TitleColor;

  signIn() {
    this.isAuthenticated.set(true);
  }

  signOut() {
    this.isAuthenticated.set(false);
  }
}