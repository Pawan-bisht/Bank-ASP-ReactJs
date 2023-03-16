export const createPostObject = (name, ssn, phoneNumber, address, dob, age) => {
    console.log(dob);
    let dates = dob.split('-');
    const finalDate = `${dates[1]}/${dates[2]}/${dates[0]} 10:00 AM`
    return {
        Name: name,
        SocialSecurityNumber: ssn,
        PhoneNumber: phoneNumber,
        Address: address,
        DOB: finalDate,
        Age: parseInt(age) 
    }
}
