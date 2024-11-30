import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'dev-so10ma1avn475r0t.us.auth0.com',
      clientId: 'BA7bmDLjLq8jRvDrFfMlDLL2c4PBIZaw',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-so10ma1avn475r0t.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ]
};
