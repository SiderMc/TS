import {
  IDepositService,
  ITransferService,
  IWithdrawService,
} from './Interfaces.js';

export default class SavingsAccount
  implements IDepositService, IWithdrawService, ITransferService
{
  public deposit(a: number) {
    console.log(`SavingsAccount: Deposited ${a}`);
  }
  public withdraw(a: number) {
    console.log(`SavingsAccount: Withdrawn ${a}`);
  }
  public transfer(to: string, a: number) {
    console.log(`SavingsAccount: Transferred ${a} to ${to}`);
  }
}