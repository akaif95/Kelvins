/*Kelvin is used to help convert between Celsius and Fahrenheit. 273.15 Kelvins = 0 Celsius*/

const kelvin = 0;

/*Convert kelvin to celsius using the formula of 
C = K - 273*/
let celsius = kelvin - 273;

/*Now, to convert to Fahrenheit, the formula is
F = C * (9/5) + 32 */

let fahrenheit = celsius * (9/5) + 32;

/*Now, we can round down the fahrenheit value using the .floor method to get an integer*/

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log();

/*Below is a way to convert Celsius to the Newton Scale, which is another way to measure heat*/

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The surrounding temperature measures as ${newton} degrees Newton.`)