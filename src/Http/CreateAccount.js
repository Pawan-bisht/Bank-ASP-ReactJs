export function createAccountBody(userId, ssn, amount) {
    const date = new Date();
    const finalDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} 10:00 AM`
    return {
        UserId: userId,
        SocialSecurityNumber: ssn,
        CreatedDate: finalDate,
        DepositeAmount: amount
    }
}