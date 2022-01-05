import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capitalize when calling onCapitalize', () => {
    const check = component.onCapitalize('hello')
    expect(check).toMatch('HELLO');
    
  })
});
