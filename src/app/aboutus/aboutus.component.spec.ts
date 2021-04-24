import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusComponent } from './aboutus.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 tag of About us', () => {
    const fixture = TestBed.createComponent(AboutusComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('About Us');
});
it('should have a h2 tag of About us', () => {
  const fixture = TestBed.createComponent(AboutusComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h2').textContent).toContain('Making Online Medicine Ordering Simple and Easy');
});
it('should have a p tag of About us', () => {
  const fixture = TestBed.createComponent(AboutusComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('p').textContent).toContain('Gone are the days when we had to drag ourselves to a drugstore during our sickness. With the advent of the internet, even the medical world in India has seen tremendous changes. This has enabled patients to do online medicine shopping right from the comfort of their homes.');
});
it('should have a dl tag of About us', () => {
  const fixture = TestBed.createComponent(AboutusComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('dl').textContent).toContain('There are many benefits you can take advantage of when you opt to order medicine online. Have a look at a few of them:');
});
it('should have a dl tag of About us', () => {
  const fixture = TestBed.createComponent(AboutusComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('dt').textContent).toContain('- Wide range of medicines available under one roof.');
});

});
