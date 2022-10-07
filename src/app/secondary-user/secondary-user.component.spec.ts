import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryUserComponent } from './secondary-user.component';

describe('SecondaryUserComponent', () => {
  let component: SecondaryUserComponent;
  let fixture: ComponentFixture<SecondaryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
