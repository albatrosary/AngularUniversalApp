import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { App, Home, About } from './app/app';
import { AModule } from './app/a/a.module';
import { BModule } from './app/b/b.module';
import { CModule } from './app/c/c.module';
export class MainModule {
    constructor() {
        console.log('Module Browser');
    }
}
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AModule, BModule, CModule,
                    FormsModule,
                    RouterModule.forRoot([
                        { path: '', component: Home, pathMatch: 'full' }
                    ])
                ],
                bootstrap: [App],
                declarations: [App, Home, About]
            },] },
];
MainModule.ctorParameters = [];
//# sourceMappingURL=module.browser.js.map