import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { App2Component } from './app/app2';
import { AdServingComponent } from './app/ad-serving';

if (environment.production) {
  enableProdMode();
}
//test
platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(App2Component);
//platformBrowserDynamic().bootstrapModule(AdServingComponent);
//platformBrowserDynamic(App2Component);
//platformBrowserDynamic(AdServingComponent);