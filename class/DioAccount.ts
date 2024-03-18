export abstract class DioAccount {//classe abstrata vai servir de modelo para outras classes, podem herdar dela, ela não pode ser instanciado
	private readonly name: string
	private readonly accountNumber: number//nem set muda ele, readonly só permite leitura
	private balance: number = 0
  private	status: boolean = true

	constructor(name: string, accountNumber: number) {
		this.name = name
		this.accountNumber = accountNumber
	}

	// setName = (name: string): void => {
	// 	this.name = name
	// 	console.log('New name saved');
	// }

	getName = (): string => {
		return this.name;
	}

	deposit = (valueMoney: number): void => {
		if (this.validateStatus()) {
			this.balance += valueMoney;
		}
	}

	withdraw = (valueMoney: number): void => {
			if (this.validateStatus() && this.balance > valueMoney) {
			this.balance -= valueMoney;
		}
	}

	getBalance = (): void => {
		console.log(this.balance);
	}

	setBalance = (valueMoney: number): void => {
		this.balance += valueMoney;
	}

	validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error('Conta inválida');
	}
}

