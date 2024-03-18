import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber)
	}

	deposit = (valueMoney: number): void => {
		if (this.validateStatus()) {
			let money = valueMoney + 10;
			this.setBalance(money);
		}
	}
}