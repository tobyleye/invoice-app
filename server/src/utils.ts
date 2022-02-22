export function generatePrimeNumbers(n: number): number[]{
    let primes: number[] = []
    let start = 3;
    while (primes.length < n) {
        if (isPrime(start)) {
            primes.push(start)
        }
        start += 2;
    }
    return primes
}


const isPrime = (n:number): boolean => {
    if(n%2 === 0) return false;
    for (let j=3; j<n; j+=2){
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

export function generateEvenNumbers(n:number): number[] {
    let result =[]
    let start =0
    do {
        result.push(start)
    } while (result.length < n)

    return result;
}