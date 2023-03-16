export const deletePostObject = (userId, ssn, accountNumber) => {
    return {
        UserId: userId,
        AccountNumber: accountNumber,
        SocialSecurityNumber: ssn
    }
}