import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddTaskComponent } from './add-task/add-task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddTaskComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIf,
    FormsModule,
    MatCardModule,
    DragDropModule,
    TasklistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
