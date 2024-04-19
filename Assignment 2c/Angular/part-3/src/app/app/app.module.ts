import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component'; // Import your AppComponent// Import your AppComponent

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([]) // Add your routes here
  ],
  providers: [],

})
export class AppModule {
  ngDoBootstrap() { } // Ensure this method is present
}
