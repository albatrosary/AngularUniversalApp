import { RouterModule } from '@angular/router';
import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component';
const bRoutes = [
    {
        path: 'b',
        component: BComponent,
        children: [
            { path: '', redirectTo: 'b', pathMatch: 'full' },
            { path: 'a', component: BaComponent },
            { path: 'b', component: BbComponent },
            { path: 'c', component: BcComponent }
        ] }
];
export const bRoutingProviders = [];
export const routing = RouterModule.forChild(bRoutes);
//# sourceMappingURL=b.routing.js.map