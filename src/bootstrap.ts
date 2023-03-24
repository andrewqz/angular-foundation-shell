import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { SHELL_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
 providers: [
   provideRouter(SHELL_ROUTES, withPreloading(PreloadAllModules)),
 ]
});
