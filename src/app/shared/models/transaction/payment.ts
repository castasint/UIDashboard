import { Transaction } from './transaction';

export interface PaymentTransaction extends Transaction {
    coverageMonth: Date;
    issuerId: Number;
    invoiceDate: Date;
    dueDate: Date;
    premiumAmount: Number;
    paymentStatus: Boolean;
    paymentdate?: Date;
    processedbyiees: Boolean;
}
