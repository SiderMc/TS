import { ILoanService } from './Interfaces.js';

export default class LoanAccount implements ILoanService {
  public loanRequest(a: number) {
    console.log(`LoanAccount: Loan of ${a} requested`);
  }
}
