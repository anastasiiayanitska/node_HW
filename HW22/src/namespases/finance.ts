export namespace Finance {
    export class LoanCalculator {
        static calculateMonthlyPayment(principal: number, rate: number, years: number): number {
            const monthlyRate = rate / 12 / 100;
            const payments = years * 12;
            return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));
        }
    }
    
    export class TaxCalculator {
        static calculateTax(income: number, taxRate: number): number {
            return income * (taxRate / 100);
        }
    }
}