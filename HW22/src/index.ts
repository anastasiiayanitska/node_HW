import { capitalize, reverseString } from "./utils/stringUtils";
import { Finance } from "./namespases/finance";
import { UserManagement } from "./namespases/userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./utils/sequenceUtils";

console.log(capitalize("hello")); 
console.log(reverseString("world")); 

console.log(Finance.LoanCalculator.calculateMonthlyPayment(10000, 5, 2));
console.log(Finance.TaxCalculator.calculateTax(50000, 20));

const admin = new UserManagement.Admin.AdminUser("Alice", "alice@example.com", true);
console.log(admin);
admin.changeAdminRights(false);
console.log(admin);

console.log(generateFibonacci(50));
console.log(generatePrimeNumbers(50));