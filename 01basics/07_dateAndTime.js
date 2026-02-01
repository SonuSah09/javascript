//            ++++++++++++++++++++++++++++++ Date ++++++++++++++++++++++++++++++ 

let myDate = new Date()

// console.log(typeof myDate); // Object
// console.log(myDate); // 2026-02-01T13:22:53.032Z => Current date and time
// console.log(myDate.toString()); // Sun Feb 01 2026 13:24:37 GMT+0000 (Coordinated Universal Time) => Current date and time
// console.log(myDate.toDateString()); // Sun Feb 01 2026
// console.log(myDate.toLocaleString()); // 2/1/2026, 1:30:48 PM
// console.log(myDate.toLocaleDateString()); // 2/1/2026
// console.log(myDate.toISOString()); // 2026-02-01T13:32:58.314Z => same output as printing just "myDate" but converted into String type.
// console.log(myDate.toJSON()); // 2026-02-01T13:32:58.314Z => same output as printing just "myDate" but converted into String type.
// console.log(myDate.toLocaleTimeString()); // 1:45:16 PM => current time
// console.log(myDate.toTimeString()); // 13:46:51 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Sun, 01 Feb 2026 13:47:46 GMT

//           ++++++++++++++++++++ Ways to format the dates ++++++++++++++++++++

let myCreatedDate = new Date( 2025, 0, 15) //  1/15/2025, 12:00:00 AM => month will be from 0 to 11, where 0 is january and 11 is december
let myCreatedDate1 = new Date(2025, 11, 31) // 12/31/2025, 12:00:00 AM
let myCreatedDate2 = new Date(2026, 1, 1, 5, 3, 15 ) // 2/1/2026, 5:03:15 AM => [year,momth,date,hour,minute,second]
let myCreatedDate3 = new Date("2026-12-28") // 12/28/2026, 12:00:00 AM => [YYYY-MM-DD]
let myCreatedDate4 = new Date("01-14-2026") // 1/14/2026, 12:00:00 AM => [MM-DD-YYYY]
let myCreatedDate5 = new Date("30-10-2026") // Invalid Date format

// console.log(myCreatedDate.toLocaleString()); //  1/15/2025, 12:00:00 AM => month will be from 0 to 11, where 0 is january and 11 is december
// console.log(myCreatedDate1.toLocaleString()); // 12/31/2025, 12:00:00 AM
// console.log(myCreatedDate2.toLocaleString()); // 2/1/2026, 5:03:15 AM => [year,momth,date,hour,minute,second]
// console.log(myCreatedDate3.toLocaleString()); // 12/28/2026, 12:00:00 AM => [YYYY-MM-DD]
// console.log(myCreatedDate4.toLocaleString()); // 1/14/2026, 12:00:00 AM => [MM-DD-YYYY]
// console.log(myCreatedDate5.toLocaleString()); // Invalid Date

//             ++++++++++++++++++++++++++++++ Time ++++++++++++++++++++++++++++++ 

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1769957314223 => number of millis since 1 jan 1970 till now
// console.log(myCreatedDate.getTime()); // 1736899200000 => millis since 1 jan 1970 till myCreatedDate (i.e 15th jan 2025)
// console.log(myCreatedDate.getDate()); // 15
// console.log(myCreatedDate.getDay()); // 3 => which is wednesday
// console.log(myCreatedDate.getFullYear()); // 2025
// console.log(myCreatedDate.getHours()); // 0 => whioch is 12 AM
// console.log(myCreatedDate.getMonth()); // 0 => which is January

// console.log(Math.floor(Date.now()/1000)); // 1769957620 => number of seconds since 1 jan 1970 till now. to convert millis into seconds, we devide by 1000 and to get the round off, we apply math.floor

let newDate = new Date()

// console.log(newDate); // will give current date and time
// console.log(newDate.getMonth() + 1); // 2 => which is current month => 1 is added to be understood by enduser that 2nd month as February
// console.log(newDate.getDay()); // 0 => current day which is sunday

console.log(` Hello there, Today is ${newDate.toLocaleString('default', {
    weekday: "long" 
})} and the time now is ${newDate.toLocaleTimeString()}`); //  Hello there, Today is Sunday and the time now is 3:44:17 PM


