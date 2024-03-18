// class User {
// 	name: string = 'Nath'
// 	age: number = 32

// 	constructor(name: string, age: number) {
// 		this.name = name,
// 			this.age = age
// 	}

// 	showName = () => {
// 		console.log(this.name);
// 	}
// }

// const user: User = new User("Isa", 32);
// user.showName();

// const otherUser = new User("João", 34);
// otherUser.showName();

//Dio Banking

//name, accountNumber
//depositar, sacar
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewTypeAccount} from './class/NewTypeAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Isa', 10);
peopleAccount.deposit(20);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 0.0);
companyAccount.deposit(20);
companyAccount.getLoan(10);
companyAccount.withdraw(10);
companyAccount.getBalance();
peopleAccount.getBalance();

const newTypeAccount: NewTypeAccount = new NewTypeAccount('DIO', 0.0);
newTypeAccount.deposit(10);
newTypeAccount.getBalance();


