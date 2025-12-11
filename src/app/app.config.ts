import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { PrimeNgTFPreset } from './primeng.theme';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: PrimeNgTFPreset,
      },
    }),
    provideCharts(withDefaultRegisterables()),
  ],
};

// provideCharts({ registerables: [BarController, Legend, Colors] });
