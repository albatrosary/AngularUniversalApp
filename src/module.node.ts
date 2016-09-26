import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App, Home, About, Default } from './app/app';

@NgModule({
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Default, pathMatch: 'full'},
      { path: 'home', component: Home},
      { path: 'about', component: About}
    ])
  ],
  bootstrap: [ App ],
  declarations: [ App, Home, About, Default ]
})
export class MainModule {
  constructor() {
    console.log('Module Node');
  }
}
