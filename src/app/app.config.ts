import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BackApiService } from "./services/back-api.service";
import { HttpClient, HttpHandler, provideHttpClient } from "@angular/common/http";
import { BackService } from "./services/back.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HttpClient,
    BackService,
    BackApiService,
    provideHttpClient()
  ],
};
