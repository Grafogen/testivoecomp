function foo(number) {
    let word;

    if(number % 10 === 1 && number % 100 !== 11) {
        word = 'компьютер';
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        word = 'компьютера';
    } else {
        word = 'компьютеров';
    }

    return number + ' ' + word;
}
 console.log(foo(34))
 console.log(foo(21))
 console.log(foo(3411))
 console.log(foo(3123454))
 console.log(foo(3))