const accountId = 56778
let accountEmail = "acc@gml.com"
var accountPassword = "655588776"
accountCity =  "Kolkata"


// accountId = 8487348 -- not allowed -- assigning something to constant is not allowed.
/*
prefer not to use "var" to declare variables in javascript
the reason -  var is  having a problem with block scopes and functional scope ({anything inside the curly braces are called scope}) 
*/

accountEmail = "abcjdcj@gml.com"
accountPassword = "cbgsajdfv47"
let accountState;
// note -  if we just create a variable and don't assign any value then javascript will consider it as undefined - for example, accountState
console.log( "Sonu, here's your Account id-", accountId);
console.table ([accountId, accountEmail, accountPassword, accountCity, accountState]);