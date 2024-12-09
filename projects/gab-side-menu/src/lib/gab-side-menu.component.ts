import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  blue = 'text-blue-500',
  green = 'text-green-500',
  yellow = 'text-yellow-500',
  orange = 'text-orange-500',
  purple = 'text-purple-500',
  pink = 'text-pink-500',
  gray = 'text-gray-500',
  indigo = 'text-indigo-500',
  teal = 'text-teal-500',
}

@Component({
  selector: 'gab-side-menu',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './gab-side-menu.component.html',
  styles: `
    .routerLinkActive button:active,
    .routerLinkActive button:hover {
      background: transparent;
    }
  `,
})
export class GabSideMenuComponent {
  public isAuthenticated = input(false);
  public titleColor = input<TitleColor>(TitleColor.purple);
  public title = input<string>('arcentales');
  public subTitle = input<string>('corp');
  public routes = input<{ name: string; path: string }[]>([]);

  public signOut = output();
  public signIn = output();
}
