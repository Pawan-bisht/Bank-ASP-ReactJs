export const withdrawMoneyObject = (userId, accountNumber, amount, ssn) => {
   return {
    UserId: userId,
    AccountNumber: accountNumber,
    WithdrawAmount: amount,
    SocialSecurityNumber: ssn
   }
}