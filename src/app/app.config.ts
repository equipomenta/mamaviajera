import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { BackApiService } from './services/back-api.service';
import { BackService } from './services/back.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(routes),
    importProvidersFrom(RouterModule.forRoot(routes)),
    HttpClient,
    BackService,
    BackApiService,
    provideHttpClient()
  ],
};
