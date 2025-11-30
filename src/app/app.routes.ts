import { Routes } from '@angular/router';
import { MonthlyOverviewComponent } from './features/monthly-overview/monthly-overview';
import { InvestmentPlanningComponent } from './features/investment-planning/investment-planning';

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
    {
        path: 'investment-planning',
        component: InvestmentPlanningComponent,
    },
];
