//enahced object literals

function newuser(user, age, country, uId){
    return{
        user,
        age,
        country, 
        uId,
    }
}

console.log(newuser("santi", 29, "CO", 1));