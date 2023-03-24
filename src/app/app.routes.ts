import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const SHELL_ROUTES: Routes = [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
    {
      path: '',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './routes'
        })
        .then(m => m.APP_ROUTES)
    },
];
