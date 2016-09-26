import { Component } from '@angular/core';
export class BComponent {
    constructor() {
        console.log('BComponent');
    }
}
BComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-b',
                template: `
    <h1>My B</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Ba Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Bb Component</a></li>
      <li><a routerLink="c" routerLinkActive="active">Bc Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
            },] },
];
BComponent.ctorParameters = [];
export class BaComponent {
    constructor() {
        console.log('BaComponent');
    }
}
BaComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-ba',
                template: `
    <h1>Ba Component</h1>
    `,
            },] },
];
BaComponent.ctorParameters = [];
export class BbComponent {
    constructor() {
        console.log('BbComponent');
    }
}
BbComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-bb',
                template: `
    <h1>Bb Component</h1>
    `,
            },] },
];
BbComponent.ctorParameters = [];
export class BcComponent {
    constructor() {
        console.log('BcComponent');
    }
}
BcComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-bc',
                template: `
    <h1>Bc Component</h1>
    `,
            },] },
];
BcComponent.ctorParameters = [];
//# sourceMappingURL=b.component.js.map