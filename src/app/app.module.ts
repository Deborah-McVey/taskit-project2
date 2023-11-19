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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddTaskComponent,
    TasklistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIf,
    FormsModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2
} from "@angular/core";
import { LoginComponent } from './login/login.component';

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  // Inject packages
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // When "isOpen" switches to true this will be added and when it's false, it will be removed
  @HostBinding("class.show") isOpen = false;

  // Click Listener to toggle.
  @HostListener("click") toggleOpen() {
    // Change our "isOpen" variable to the opposite of what it currently is.
    this.isOpen = !this.isOpen;

    // Grab the dropdown-menu div
    let dropdownList = this.elementRef.nativeElement.querySelector(
      ".dropdown-menu"
    );

    if (this.isOpen) {
      // If "isOpen" is true => ADD the class "show" to our dropdownList
      this.renderer.addClass(dropdownList, "show");
    } else {
      // If "isOpen" is false => REMOVE the class "show" from our dropdownList
      this.renderer.removeClass(dropdownList, "show");
    }
  }
}
