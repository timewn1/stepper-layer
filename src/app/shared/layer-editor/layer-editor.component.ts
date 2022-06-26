import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { ArtFormGroup, layerForm, LayerFormGroup } from '../../core/strict-typed-forms/layer.form';
import { Layer } from '../../core/models/layer.model';

@Component({
  selector: 'app-layer-editor',
  templateUrl: './layer-editor.component.html',
  styleUrls: ['./layer-editor.component.scss'],
})
export class LayerEditorComponent implements OnInit {
  @Output() layerChanged: EventEmitter<Layer[]> = new EventEmitter<Layer[]>();

  form: FormGroup<ArtFormGroup> = this.fb.nonNullable.group({
    layers: this.fb.nonNullable.array<FormGroup<LayerFormGroup>>([this.fb.nonNullable.group({ ...layerForm })]),
  });

  layers: Layer[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<FormGroup<LayerFormGroup>[]>) {
    moveItemInArray(this.form.controls.layers.controls, event.previousIndex, event.currentIndex);
    this.emitLayerChangeEvent();
  }

  addLayer() {
    this.form.controls.layers.push(this.fb.nonNullable.group({ ...layerForm }));
  }

  saveLayer(layer: FormGroup<LayerFormGroup>) {
    layer.controls.edit.setValue(false);
    this.emitLayerChangeEvent();
  }

  deleteLayer(index: number) {
    this.form.controls.layers.removeAt(index);
    this.emitLayerChangeEvent();
  }

  private emitLayerChangeEvent() {
    if (this.form.value && this.form.value.layers) {
      this.layers = this.form.controls.layers.controls
        .filter((item) => item.valid)
        .map((item) => ({ title: item.controls.title.value }));
    }

    this.layerChanged.emit(this.layers);
  }
}
