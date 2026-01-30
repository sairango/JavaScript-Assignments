// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let a = 1;
function callback() {
    console.log(a);
    a++;

    setTimeout(callback, 1000);
}


    setTimeout(callback , 1000)

// (Hint: setTimeout)