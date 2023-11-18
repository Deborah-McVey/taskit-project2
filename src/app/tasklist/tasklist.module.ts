import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasklistComponent } from './tasklist.component';


@NgModule({
  declarations: [
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    NgIf,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [TasklistComponent]
})
export class TasklistModule {}
