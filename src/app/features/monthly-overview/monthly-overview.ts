import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monthly-overview',
  imports: [CommonModule, FormsModule],
  templateUrl: './monthly-overview.html',
  styleUrl: './monthly-overview.scss',
})
export class MonthlyOverviewComponent {
  // Einnahmen & Ausgaben (pro Monat)
  monthlyIncome: number | null = 3000;
  fixedExpenses: number | null = 1500;
  variableExpenses: number | null = 500;

  get totalExpenses(): number {
    return this.sanitize(this.fixedExpenses) + this.sanitize(this.variableExpenses);
  }

  get freeAmount(): number {
    return this.sanitize(this.monthlyIncome) - this.totalExpenses;
  }

  get freeAmountPercent(): number {
    const income = this.sanitize(this.monthlyIncome);
    if (income <= 0) return 0;
    return (this.freeAmount / income) * 100;
  }

  /**
   * Hilfsfunktion: null/NaN -> 0
   */
  private sanitize(value: number | null): number {
    if (value === null || isNaN(value)) {
      return 0;
    }
    return value;
  }

  /**
   * Optional: Vorschlag, wie viel man investieren könnte
   * z.B. 50% vom Überschuss, aber nie negativ
   */
  get suggestedInvestment(): number {
    return Math.max(0, this.freeAmount * 0.5);
  }
}