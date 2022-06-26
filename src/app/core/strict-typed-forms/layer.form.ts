import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface ArtFormGroup {
  layers: FormArray<FormGroup<LayerFormGroup>>;
}

export interface LayerFormGroup {
  title: FormControl<string>;
  edit: FormControl<boolean>;
}

export const layerForm = {
  title: ['', Validators.required],
  edit: true,
};
