import { Routes } from '@angular/router';
import { JustAComponent } from './just-acomponent/just-acomponent';

export const routes: Routes = [{
    path: ':tenantId/:projectId',
    component: JustAComponent,
    children: [
        { path: '', redirectTo: 'detail', pathMatch: 'full' },
    ],
}];
