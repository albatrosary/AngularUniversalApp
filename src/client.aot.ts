// the polyfills must be the first thing imported
import 'angular2-universal-polyfills';

// Angular 2
import { enableProdMode} from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';

// enable prod for faster renders
enableProdMode();

import { MainModuleNgFactory } from './module.browser.ngfactory';

const platformRef = platformUniversalDynamic();

// on document ready bootstrap Angular 2
//document.addEventListener('DOMContentLoaded', () => {

  platformRef.bootstrapModuleFactory(MainModuleNgFactory);

//});
