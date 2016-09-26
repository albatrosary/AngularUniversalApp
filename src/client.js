import 'angular2-universal-polyfills';
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
enableProdMode();
import { MainModule } from './module.browser';
const platformRef = platformUniversalDynamic();
document.addEventListener('DOMContentLoaded', () => {
    platformRef.bootstrapModule(MainModule);
});
//# sourceMappingURL=client.js.map