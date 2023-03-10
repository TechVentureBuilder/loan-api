export interface Loan {
    id?: string;
    remainingBalance: number;
    amount: number;
    paidAmount: number;
    customerId: string;
    status: string;
    startDate: Date;
    endDate: Date;
    created: Date;
    updated: Date;
    expand?: any;
}
