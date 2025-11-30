import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment-planning',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './investment-planning.html',
  styleUrl: './investment-planning.scss',
})
export class InvestmentPlanningComponent {
  /**
   * Monatlicher Betrag, den du investieren möchtest.
   * Für den Anfang einfach frei eingeben.
   * (In Zukunft könnten wir den Wert aus deinem Überschuss ableiten.)
   */
  monthlyInvestment: number | null = 500;

  // Prozentuale Aufteilung (sollte idealerweise 100% ergeben)
  etfPercent = 60;
  cryptoPercent = 20;
  cashPercent = 20;

  private sanitize(value: number | null): number {
    if (value === null || isNaN(value)) return 0;
    return value;
  }

  get totalPercent(): number {
    return this.etfPercent + this.cryptoPercent + this.cashPercent;
  }

  get etfAmount(): number {
    return (this.sanitize(this.monthlyInvestment) * this.etfPercent) / 100;
  }

  get cryptoAmount(): number {
    return (this.sanitize(this.monthlyInvestment) * this.cryptoPercent) / 100;
  }

  get cashAmount(): number {
    return (this.sanitize(this.monthlyInvestment) * this.cashPercent) / 100;
  }
}
