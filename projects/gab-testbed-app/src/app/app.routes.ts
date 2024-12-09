import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  {
    path: 'panel',
    component: TestComponent,
    children: [
      {
        path: 'profile',
        component: TestComponent,
      },
    ],
  },
];
