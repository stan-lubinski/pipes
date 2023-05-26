import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/shell/shell.module').then((m) => m.ShellModule),
  },
];
