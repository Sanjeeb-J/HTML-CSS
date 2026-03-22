// Home Exercise Solution: Bank Account Simulator (Getters/Setters)
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }

    get balance() {
        return "$" + this._balance.toFixed(2);
    }

    set balance(amount) {
        if (amount > 0) {
            this._balance = amount;
        } else {
            console.error("Balance update amount must be positive!");
        }
    }
}

let obj = { user: "Spongebob", account: new BankAccount(100) };

// Destructure the object into variables
let { user, account } = obj;

console.log(user + "'s initial balance: " + account.balance);
account.balance = -50; // Should trigger warning
console.log(user + "'s balance is still: " + account.balance);
account.balance = 250;
console.log(user + "'s new balance: " + account.balance);
