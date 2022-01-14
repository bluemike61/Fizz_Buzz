function fizzbuzzFunction(x) {
    for (let i = 0; i < x; i++) {
        if (i%3 == 0 && i%5 == 0) {
            console.log('Fizz Buzz');
        }
        else if (i%3== 0){
            console.log('Fizz');
        }
    }
}

var x = 9

fizzbuzzFunction(x);