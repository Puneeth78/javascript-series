// random password generator

function generetePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbol){
    
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+=-";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowercase? lowercaseChars:"";
    allowedChars+=includeUppercase? uppercaseChars:"";
    allowedChars+=includeNumbers? numberChars:"";
    allowedChars+=includeSymbol? symbolChars:"";

    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length===0){
        return`(at least one set of char need to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}



const passwordLength=10;
const includeLowercase=true;
const includeUppecase=true;
const includeNumbers=false;
const includeSymbols=true;

const  password=generetePassword(passwordLength,
                                includeLowercase,
                                includeUppecase,
                                includeNumbers,
                                includeSymbols); 
console.log(`generate password:${password}`);                 