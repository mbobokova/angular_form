import { Routes } from '@angular/router';

// Lazy loading for optimalization
export const routes: Routes = [
    { 
        path: 'form', 
        loadComponent: () => import('./form/form.component').then(m => m.FormComponent)
    },
    { 
        path: 'view', 
        loadComponent: () => import('./view-page/view-page.component').then(m => m.ViewPageComponent)
    },
    { path: '', redirectTo: '/form', pathMatch: 'full' }
];
