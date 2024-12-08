import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabSideMenuComponent } from './gab-side-menu.component';
import { provideRouter } from '@angular/router';

describe('GabSideMenuComponent', () => {
  let fixture: ComponentFixture<GabSideMenuComponent>;
  let component: GabSideMenuComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GabSideMenuComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GabSideMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call singIn when button is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]',
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]',
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });
});
