import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component'


const bRoutes: Routes = [
  {
    path: 'b',
    component: BComponent,
    children: [
    { path: '', redirectTo: 'b', pathMatch: 'full'},
    { path: 'a', component: BaComponent },
    { path: 'b', component: BbComponent },
    { path: 'c', component: BcComponent }
  ]}
];

export const bRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(bRoutes);
