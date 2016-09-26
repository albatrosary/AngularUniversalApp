import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, aRoutingProviders }  from './a.routing';

import { AComponent, AaComponent, AbComponent, AcComponent } from './a.component'

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
  declarations: [AComponent, AaComponent, AbComponent, AcComponent],
  providers: [
    aRoutingProviders
  ],
})
export class AModule {
  constructor() {
    console.log('AModule');
  }
}
