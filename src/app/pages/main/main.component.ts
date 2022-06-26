import { Component, OnInit } from '@angular/core';

import { Layer } from '../../core/models/layer.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  layers: Layer[] = [];

  constructor() {}

  ngOnInit(): void {}
}
