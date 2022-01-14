function fizzbuzzFunction(x) {
    for (let i = 0; i <= x; i++) {
        if (i%3 == 0 && i%5 == 0 && i != 0) {
            console.log('Fizz Buzz');
        }
        else if (i%5 == 0 && i != 0){
            console.log('Buzz');
        }
        else if (i%3== 0 && i != 0){
            console.log('Fizz');
        }
        else {
            console.log(i);
        }
    }
}

var x = 15

fizzbuzzFunction(x);