import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideClientHydration } from '@angular/platform-browser';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, {
        ...config,
        providers: [provideClientHydration()] // Enabling hydration
    }, context);

export default bootstrap;
