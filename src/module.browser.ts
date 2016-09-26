import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App, Home, About } from './app/app';

import { AModule } from './app/a/a.module';
import { BModule } from './app/b/b.module';
import { CModule } from './app/c/c.module';

@NgModule({
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    AModule, BModule, CModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full' },
      { path: 'home', component: Home},
      { path: 'about', component: About}
    ])
  ],
  bootstrap: [ App ],
  declarations: [ App, Home, About ]
})
export class MainModule {
  constructor() {
    console.log('Module Browser');
  }
}
