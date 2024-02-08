import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallApiComponent } from './call-api/call-api.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CallApiComponent,
    BrowserModule,
    AppComponent,
    HttpClientModule,
    CommonModule
  ]
})
export class AppModule { }
