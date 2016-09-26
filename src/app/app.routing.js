import { RouterModule } from '@angular/router';
import { Home, About } from './app';
const appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About }
];
export const appRoutingProviders = [];
export const routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map