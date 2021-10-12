const num = +prompt(`Введите число`);
let result;

for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        result = i;
        break;
    } else if (num < 1) {
        result = NaN;
    }
}

console.log (+result);