import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerEditorComponent } from './layer-editor.component';

describe('LayerEditorComponent', () => {
  let component: LayerEditorComponent;
  let fixture: ComponentFixture<LayerEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
