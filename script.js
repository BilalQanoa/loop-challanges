// 1. Display odd numbers from 1 to 20,Using a loop,
//  create code to print all odd numbers
//  from 1 to 20 in the console.

console.log("Odd numbers from 1 to 20");
for (var i = 1; i <= 20; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

/* 
2. Decreasing multiples of 3 , Using a loop,
 write code to display all numbers that are
  divisible by 3 from 100 down to 0 in the console.
*/

console.log("Numbers divisible by 3 from 100 down to 0 in the console.");
for (var i = 99; i >= 0; i-= 3){
    console.log(i);
}
