import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { KanbanComponent } from './kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    KanbanComponent
  ],
  imports: [
    MatCardModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [KanbanComponent]
})
export class KanbanModule { }
