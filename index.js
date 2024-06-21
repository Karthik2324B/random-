// random password generator

function pg(length,includelowercase,inlcudeuppercase,includenumbers,includesymbols){
    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschars="1234567890";
    const symbolschars="!@#$%^&*";

    let allowedchars ="";
    let password="";
    allowedchars +=includelowercase?lowercasechars:"";
    allowedchars +=inlcudeuppercase?uppercasechars:"";
    allowedchars +=includelowercase?numberschars:"";
    allowedchars +=includelowercase?symbolschars:"";

    

    if(length<=0){
        return `(password length must be atleast 1)`;
    }
    if(allowedchars.length===0){
        return `(atleast one set of character must be there)`;

    }
    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length);
        password+=allowedchars[randomindex];

         
    }
    return password;

}


const passwordlength=10;
let includelowercase=true;
let inlcudeuppercase=true;
let includenumbers=true;
let includesymbols=true;

let password= pg(passwordlength,includelowercase,inlcudeuppercase,includenumbers,includesymbols)

console.log(`Generated Password: ${password}`);

document.getElementById("gp").textContent=password;