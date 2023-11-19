import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TaskDialogComponent } from './task-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    NgIf,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [TaskDialogComponent]
})
export class TaskDialogModule {}
