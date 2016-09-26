import { RouterModule } from '@angular/router';
import { CComponent, CaComponent, CbComponent } from './c.component';
import { DComponent, DaComponent, DbComponent } from './d.component';
const aRoutes = [
    { path: 'c', component: CComponent, children: [
            { path: '', redirectTo: 'a', pathMatch: 'full' },
            { path: 'a', component: CaComponent },
            { path: 'b', component: CbComponent }
        ] },
    { path: 'd', component: DComponent, children: [
            { path: '', redirectTo: 'a', pathMatch: 'full' },
            { path: 'a', component: DaComponent },
            { path: 'b', component: DbComponent }
        ] }
];
export const cRoutingProviders = [];
export const routing = RouterModule.forChild(aRoutes);
//# sourceMappingURL=c.routing.js.map