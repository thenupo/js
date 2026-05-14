function factorial(n) {
    if (typeof n !== "number" || isNaN(n)) {
        return "Это не число. Пожалуйста, введите целое число.";
    }

    if (n % 1 !== 0) {
        return "Это не целое число. Пожалуйста, введите целое число.";
    }

    if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); 