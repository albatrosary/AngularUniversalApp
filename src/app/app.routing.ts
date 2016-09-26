import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home, About } from './app'

/* Invalid configuration of route 'a': redirectTo and children cannot be used together */
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home},
  { path: 'about', component: About}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);