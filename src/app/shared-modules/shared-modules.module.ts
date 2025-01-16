import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoderComponent } from './loder/loder.component';
import { DeleteConfremationDailogComponent } from './delete-confremation-dailog/delete-confremation-dailog.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoderComponent,
    DeleteConfremationDailogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoderComponent,
    DeleteConfremationDailogComponent
  ]
})
export class SharedModulesModule { }
