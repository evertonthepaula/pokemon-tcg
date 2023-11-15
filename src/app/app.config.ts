import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// ROUTES
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
