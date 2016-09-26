import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CComponent, CaComponent, CbComponent } from './c.component'
import { DComponent, DaComponent, DbComponent } from './d.component'

const aRoutes: Routes = [
  { path: 'c', component: CComponent, children: [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: CaComponent },
    { path: 'b', component: CbComponent }
  ]},
  { path: 'd', component: DComponent, children: [
    { path: '', redirectTo: 'a', pathMatch: 'full'},
    { path: 'a', component: DaComponent },
    { path: 'b', component: DbComponent }
  ]}
];

export const cRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(aRoutes);
