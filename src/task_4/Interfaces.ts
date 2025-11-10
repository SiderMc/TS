export interface ILoanService{
    loanRequest(amount: number): void;
  }
  export interface IDepositService{
    deposit(amount: number): void;
  }
  export interface IWithdrawService{
    withdraw(amount: number): void;
  }
  export interface ITransferService{
    transfer(to: string, amount: number): void;
  }