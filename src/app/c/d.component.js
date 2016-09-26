import { Component } from '@angular/core';
export class DComponent {
    constructor() {
        console.log('DComponent');
    }
}
DComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-d',
                template: `
    <h1>My D</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Da Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Db Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
            },] },
];
DComponent.ctorParameters = [];
export class DaComponent {
    constructor() {
        console.log('DaComponent');
    }
}
DaComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-da',
                template: `
    <h1>Da Component</h1>
    `,
            },] },
];
DaComponent.ctorParameters = [];
export class DbComponent {
    constructor() {
        console.log('DbComponent');
    }
}
DbComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-db',
                template: `
    <h1>Db Component</h1>
    `,
            },] },
];
DbComponent.ctorParameters = [];
//# sourceMappingURL=d.component.js.map