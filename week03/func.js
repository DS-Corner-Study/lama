const { odd, even } = require('./var');
                            // 불러올 모듈의 경로. js, json 확장자 생략 가능
//* const obj = require('./var'); //*객체 전체를 불러온 뒤 

function checkOddOrEven(num) {
    if (num % 2) {
        //* 홀수
        return odd;
    }
    //* 짝수
    return even;
}

module.exports = checkOddOrEven;