function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    let counter = 0;

    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            counter++;
        }
    }
    
    if (counter < 3) {
        return true
    } else {
        return false;
    }
    
}

module.exports = {
    isPrime
}

console.log(isPrime(17
))