function Account(accountNumber, balance = 0, owner) {
    this.accountNumber = accountNumber
    this.balance = balance
    this.owner = owner
}

Account.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be greater than 0.");
    }
};

Account.prototype.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be greater than 0.");
    }
};

Account.prototype.calculateCompoundInterest = function (rate, years) {
    if (rate <= 0 || years <= 0) {
        console.log("Interest rate and years must be greater than 0.");
        return 0;
    }
    const finalAmount = this.balance * Math.pow((1 + rate / 100), years);
    const interest = finalAmount - this.balance;
    console.log(`After ${years} years at an interest rate of ${rate}%, the interest will be $${interest.toFixed(2)}, and the final balance will be $${finalAmount.toFixed(2)}.`);
    return interest;
};

const myAccount = new Account(50042, 1000, 'John')

myAccount.deposit(500)

myAccount.withdraw(200)

myAccount.calculateCompoundInterest(2, 5)