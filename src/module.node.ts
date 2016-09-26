import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App, Home, About } from './app/app';

@NgModule({
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full'},
      { path: 'home', component: Home},
      { path: 'about', component: About}
    ])
  ],
  bootstrap: [ App ],
  declarations: [ App, Home, About ]
})
export class MainModule {
  constructor() {
    console.log('Module Node');
  }
}
