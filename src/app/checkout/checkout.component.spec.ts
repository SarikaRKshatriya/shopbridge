import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutComponent } from './checkout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../products.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProductsService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a marquee tag of checkout', () => {
    const fixture = TestBed.createComponent(CheckoutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('marquee').textContent).toContain('* Please expect delays in delivery due to lockdown restrictions..');
});
it('should have a h2 tag of checkout', () => {
  const fixture = TestBed.createComponent(CheckoutComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h2').textContent).toContain('Thanks for your Purchase !!!');
});
it('should have a span tag of checkout', () => {
  const fixture = TestBed.createComponent(CheckoutComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('span').textContent).toContain('Above medicines will be delivered to in the following address:');
});
});
