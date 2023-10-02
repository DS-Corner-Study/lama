const { odd, even } = require('./var');
const checkNumber = require('./func');      //* 모둘로부터 가져올 때 변수 이름 다르게 설정 가능

function checkStringOddorEven(str) {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddorEven('hello'));