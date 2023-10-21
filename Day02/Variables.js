const accountId = 694975
let accountEmail = "zain@google.com"
var accountPassowrd = "123456"
accountCity = "Lahore"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "za@gmail.com"
accountPassowrd = "0987"
accountCity = "Karachi"

console.log(accountId)

/*
Prefer not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])