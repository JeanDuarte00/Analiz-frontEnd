import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGraficoComponent } from './item-grafico.component';

describe('ItemGraficoComponent', () => {
  let component: ItemGraficoComponent;
  let fixture: ComponentFixture<ItemGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
