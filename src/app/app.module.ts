import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';

//decorator:Metadata information 
@NgModule({
  declarations: [  //contains the list of component classes- an array
    AppComponent,
    DatatypesComponent,
    DirectivesComponent,
    TwowaybindingComponent,
    CarComponent
  ],
  imports: [  //imports required inbuilt module
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],  //services.DI
  bootstrap: [AppComponent]
})
export class AppModule { }
