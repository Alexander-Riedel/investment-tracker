import { Routes } from '@angular/router';
import { MonthlyOverviewComponent } from './features/monthly-overview/monthly-overview';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'monthly-overview',
        pathMatch: 'full',
    },
    {
        path: 'monthly-overview',
        component: MonthlyOverviewComponent,
    },
];
