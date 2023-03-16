export const depositeMoneyObject = (userId, accountNumber, amount, ssn) => {
    return {
     UserId: userId,
     AccountNumber: accountNumber,
     DepositeAmount: amount,
     SocialSecurityNumber: ssn
    }
 }