import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h2 tag of Contact us', () => {
    const fixture = TestBed.createComponent(ContactusComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Contact Us');
});
it('should have a span tag of Contact us', () => {
  const fixture = TestBed.createComponent(ContactusComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('span').textContent).toContain('Please contact us at the following email id or phone number for any enquiries:');
});

});
