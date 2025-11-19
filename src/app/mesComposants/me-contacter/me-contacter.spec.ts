import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeContacter } from './me-contacter';

describe('MeContacter', () => {
  let component: MeContacter;
  let fixture: ComponentFixture<MeContacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeContacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeContacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
