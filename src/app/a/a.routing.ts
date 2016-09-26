import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent, AaComponent, AbComponent, AcComponent } from './a.component'

const aRoutes: Routes = [
  { 
    path: 'a',
    component: AComponent,
    children: [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: AaComponent },
    { path: 'b', component: AbComponent },
    { path: 'c', component: AcComponent }
  ]}
];

export const aRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(aRoutes);
