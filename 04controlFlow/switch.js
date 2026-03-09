// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;

    default:
        console.log("default case match");
        break;
}

/* 
NOTE:   1. if a case gets matched and we don't apply "break;", all the remaining cases will execute until break keyword is added. 
        2. if no case gets matched, the default will be executed.

*/