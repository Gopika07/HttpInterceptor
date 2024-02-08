import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { responseInterceptor } from './response.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: responseInterceptor, multi: true },
    provideAnimations(),
    provideToastr(),
  ],
};
