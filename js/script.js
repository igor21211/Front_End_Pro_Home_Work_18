
const pow = (number, degree) => {
    if(degree == 0){
        return 1;
    }else {
        return number * pow(number, degree -1);
    }

};
const num = 4;
const degree = 4;
let result = pow(num, degree);
console.log(`${num} в ступені ${degree} дорівнює ${result}`);