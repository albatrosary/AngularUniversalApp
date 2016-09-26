import { RouterModule } from '@angular/router';
import { AComponent, AaComponent, AbComponent, AcComponent } from './a.component';
const aRoutes = [
    {
        path: 'a',
        component: AComponent,
        children: [
            { path: '', redirectTo: 'a', pathMatch: 'full' },
            { path: 'a', component: AaComponent },
            { path: 'b', component: AbComponent },
            { path: 'c', component: AcComponent }
        ] }
];
export const aRoutingProviders = [];
export const routing = RouterModule.forChild(aRoutes);
//# sourceMappingURL=a.routing.js.map