import { Component } from '@angular/core';
export class AComponent {
    constructor() {
        console.log('AComponent');
    }
}
AComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-a',
                template: `
    <h1>My A</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Aa Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Ab Component</a></li>
      <li><a routerLink="c" routerLinkActive="active">Ac Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
            },] },
];
AComponent.ctorParameters = [];
export class AaComponent {
    constructor() {
        console.log('AaComponent');
    }
}
AaComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-aa',
                template: `
    <h1>Aa Component</h1>
    `,
            },] },
];
AaComponent.ctorParameters = [];
export class AbComponent {
    constructor() {
        console.log('AbComponent');
    }
}
AbComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-ab',
                template: `
    <h1>Ab Component</h1>
    `,
            },] },
];
AbComponent.ctorParameters = [];
export class AcComponent {
    constructor() {
        console.log('AcComponent');
    }
}
AcComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-ac',
                template: `
    <h1>Ac Component</h1>
    `,
            },] },
];
AcComponent.ctorParameters = [];
//# sourceMappingURL=a.component.js.map