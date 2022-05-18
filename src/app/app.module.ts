import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisionComponent } from './vision/vision.component';
import { InterComponent } from './inter/inter.component';
import { SandComponent } from './sand/sand.component';
import {FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { NumService } from './num.service';
import { LiteComponent } from './lite/lite.component';


@NgModule({
  declarations: [
    AppComponent,
    VisionComponent,
    InterComponent,
    SandComponent,
    StudentDetailsComponent,
    StudentComponent,
    LiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
