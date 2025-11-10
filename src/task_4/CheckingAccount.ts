import {
  IDepositService,
  ITransferService,
  IWithdrawService,
} from './Interfaces.js';

export default class CheckingAccount
  implements IDepositService, IWithdrawService, ITransferService
{
  public deposit(a: number) {
    console.log(`CheckingAccount: Deposited ${a}`);
  }
  public withdraw(a: number) {
    console.log(`CheckingAccount: Withdrawn ${a}`);
  }
  public transfer(to: string, a: number) {
    console.log(`CheckingAccount: Transferred ${a} to ${to}`);
  }
}
