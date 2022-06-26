import { Component, Input, OnInit } from '@angular/core';

import { Layer } from '../../core/models/layer.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  @Input() layers: Layer[] = [];

  constructor() {}

  ngOnInit(): void {}

  selectLayer(index: number) {
    this.layers.forEach((layer) => (layer.selected = false));
    this.layers[index].selected = true;
  }
}
