
# 2장 알아둬야 할 자바스크립트



## 2.1 ES2015+


2015년 ES2015(ES6)이 등장해 자바스크립트 문법에 큰 변화가 일어남.


이 책의 예제들은 ES2015 및 그 이후 문법을 사용함.

모르면 스터디를 진행함에 많은 문제가 있을 수 있음. 숙지 요망


var을 이용한 변수 선언 -> const, let으로 대체


### 블록 스코프

: const, let의 공통 특징

아래의 예시를 통해 더 자세히 알아볼 수 있음 (코드는 크롬 개발자 도구 console 탭에 입력)

```
if (true) {
  var x = 3;
}
console.log(x); // 3

if (true) {
  const y = 3;
}
console.log(y);

// 3
// VM3119:1 Uncaught TypeError: Assignment to constant variable.
```

입력시 출력 결과로, X값은 3으로 정상 출력이 되지만, y에 대해서는 오류가 발생.


var을 const로 바꿔서 발생.


var -> 함수 스코프 가짐. if문의 블록 관계업시 접근

const -> 블록 스코프 가짐. 블록 밖의 변수에 접근 X.

*블록 = if, while, for, function 등의 ({ 중괄호 사이} ) 의미.




### const와 let의 차이점

: const는 한 번 할당한 이후 다른 값 할당 불가능, let은 가능.

const = 상수 (변수이지만 값의 변경이 불가능하기에)



const 의 사용 예

```
const a = 0;
a = 1;

// VM3119:1 Uncaught TypeError: Assignment to constant variable.
내용을 입력하세요.
입력시 오류 발생
```


let의 사용 예

```
let b = 0;
b = 1;

// 1
```

입력시 정상적인 값 나옴.



### 템플릿 문자열

: 기존에 ` 따옴표 대신에 백틱을 사용해 큰 따옴표나 작은 따옴표와 함께 사용 가능하다.

${변수} 형식으로 변수를 더한다.



// 기존 문법
``` 
var string1 = num1 + ' 더하기 '  + num2 + '는 \'' + result + '\'';
```

위의 기존 문법과 아래의 코드를 비교해 살펴보라.

```
// 템플릿 문자열

const string2 = `${num3} 더하기 ${num4}는 ' ${result2}'`;
```
```


### 객체 리터럴


더 편리한 기능 추가. 코드의 양을 줄이는 데 집중한 모습.

* 객체의 메서드에 함수를 연결할 때 더는 콜론(:)과 function을 붙이지 않음


```
// 기존 문법

var sayNode = function() {
  console.log('Node');
};
var es = 'ES';
var oldObject = {
  sayJS: function() {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic
```


위의 기존 코드와 아래의 코드를 비교

```
// 객체 리터럴

const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
```

* 속성명과 변수명이 동일한 경우에는 한 번만 써도 되게 바뀜.

```
// 기존 코드

{ name: name, age: age }
```

위의 기존 코드와 아래의 코드를 비교

```
// 개선 사항

{ name, age } 
```
화살표 함수

*화살표 함수라는 새로운 함소 추가. 기존 함수 모양 functino() {} 도 이용 가능.

return 문만 내부에 있는 경우, 화살표 함수를 통해서 이를 줄일 수 있음.


```
// 기존 문법

function add1(x, y) {
  return x + y;
}
내용을 입력하세요.
위와 아래의 코드를 비교해 확인


// 새로운 문법 
// 모두 같은 의미


const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);
```


### 구조 분해 할당

객체와 배열로부터 속성이나 요소를 쉽게 꺼냄.


candyMachine 객체 안의 속성(const 같은 여러 단계 안의 속성 )을 찾아냄.

getCandy, count 변수 초기화를 쉼표를 이용해 1줄에 표기.

```
// 기존 문법

var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
```

위와 아래의 코드를 비교해 확인


```
// 개선된 문법

const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: { count } } = candyMachine;
```

뿐만 아니라, 배열의 경우에도 구조 분해 할당 문법을 적용할 수 있음.


```
// 기존 문법

var array = [‘nodejs’, {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];
```


위와 아래의 코드를 비교해 확인

```
// 개선된 문법

const array = [‘nodejs’, {}, 10, true];
const [node, obj, , bool] = array;
```

변수로 두고싶지 않은 요소는 ,와 , 사이에 공백으로 배치해 변수명을 지어주지 않음





### 클래스

: 클래스 기반의 동작x, 프로토타입 기반으로 동작. 프로토타입 기반 문법을 보기 좋게 클래스로 바꿈.


Human 생성자 함수, 이를 상속한 Zero 생성자 함수에 대한 기존 코드

```
// 기존 코드

var Human = function(type) {
  this.type = type || 'human';
};

Human.isHuman = function(human) {
  return human instanceof Human;
}

Human.prototype.breathe = function() {
  alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
// 상속
Zero.prototype.constructor = Zero; 
Zero.prototype.sayName = function() {
  alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); 
```

위와 아래의 코드를 비교해 확인

```
// 개선된 문법

class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert('h-a-a-a-m');
  }
}

// 상속
class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); 
```

클래스 안으로 그룹화되고 Human, isHuman 등의 클래스 함수는 static 키워드로 전환.

extends 키워드로 쉽게 상속





### 프로미스

콜백 대신 프로미스 기반으로 재구성.

콜백 지옥 현상을 극복했다는 장점.

* 콜백 지옥 현상 ; 콜백 함수를 익명 함수로 전달하는 과정에서 또 다시 콜백 안에 함수 호출이 반복되어 코드의 들여쓰기 순준이 감당하기 힘들 정도로 깊어지는 현상

중요한 객체. 꼭 알아두어야 함.



### 프로미스의 규칙

1. 프로미스 객체 생성

```
const condition = true; // true이면 resolve, false이면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
// 기타 내용.. 
promise
  .then((message) => {   // 결괏값 받음
    console.log(message); // 성공시 실행
  })
  .catch((error) => {    // 결괏값 받음
    console.error(error); // 실패시 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
});
```


2. 실행은 바로 하되 결괏값은 나중에 받음.

결괏값은 실행 완료 이후 then, catch 메서드를 통해서 받음.

then에서 new Promise를 return해야 다음 then에서 받을 수 있음.

```
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })

  .catch((error) => {
    console.error(error);
});
```


3. 콜백을 프로미스로 바꿀 수 있음.

메서드가 프로미스 방식을 지원할 경우 바꾸기 가능


findOne과 save 메서드가 내부적으로 프로미스 객체를 갖고 있다고 가정.

```
// 바꿀 콜백 함수 (3번 중첩)

function findAndSaveUser(Users) {
  Users.findOne({}, (err, user) => { // 첫 번째 콜백
    if (err) {
      return console.error(err);
    }
    user.name = 'zero';
    user.save((err) => { // 두 번째 콜백
      if (err) {
        return console.error(err);
      }
      Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
        // 생략
      });
    });
  });
}
```


아래의 코드로 바꿀 경우, 코드의 깊이가 세 단계 이상 깊어지지 않음.

then 메서드는 순차적으로 실행

각 콜백 마다 처리해야 했던 err의 경우 마지막 catch에서 한번에 처리 가능


```
// 프로미스로 바꿈

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}
```


4. 프로미스 여러 개를 한 번에 실행할 수 있는 방법

기존의 콜백 패턴일 경우 이를 중첩해 실행.

Promise.all 이용해 간단히 적용 가능.

모두 resolve될 때까지 기다렸다가 then으로 넘어감.
```

// ﻿프로미스 여러 개 한번에

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });
```

Promise.resolve는 즉시 resolve하는 프로미스를 만드는 방법.




5. Promise.allSettled로 좀 더 자세한 결괏값 알기

정확히 어떤 프로미스에서 reject되었는지 알기 위해서는 Promise.all 대신 Promise.allSettled를 사용.

```
// 정확한 reject 프로미스를 알기 위한 방법

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
/* [
*    { status: 'fulfilled', value: '성공1' },
*    { status: 'rejected', reason: '실패2' },
*    { status: 'fulfilled', value: '성공3' }
*  ]
*/
  })
  .catch((error) => {        // 꼭 붙여
    console.error(error);
  });
```

Promise.all 대신 Promise.allSettled를 사용하는 것을 좀 더 권장




6. reject 된 Promise에 catch를 달아 에러 발생 금지!

```
// 에러를 막는 catch

try {
  Promise.reject('에러');
} catch (e) {
  console.error(e); 
}

Promise.reject('에러').catch(() => {
 
})
```




### async/await

node 7.6 버전부터 지원.

비동기 위주로 프로그래밍해야할 때 큰 도움

then, catch로 인해 긴 코드를 깔끔하게 줄여줌


```
// 프로미스 코드

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      // ...
    })
    .catch(err => {
      console.error(err);
    });
}
```

위와 아래의 코드를 비교해 확인


```
// ﻿async/await 적용

async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // 생략
  } catch (error) {
    console.error(error);
  }
}
```

함수 선언부를 수정함.

프로미스가 resolve될 때 까지 기다린 후 다음 로직으로 넘어감.


화살표 함수에서 적용한 사례
```

const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
    // ...
  } catch (error) {
    console.error(error);
  }
};
```


### Map/Set

새로운 자료구조 중 자주 쓰이는 것.


 Map = 객체

: 속성 간 순서 보장. 반복문 사용 가능. 속성 값으로 문자열, 문자열 아닌 값 등 가능. size 메서드로 속성 수 아릭 쉬움.


Set = 배열

: 중복 허용x. 배열 자료구조 사용하고싶지만 중복 허용하고 싶지 않을 때 사용. 기존 배열에서 중복 제거하고 싶을 떄 사용.

* 배열로 set을 되돌릴 때는 Array.from(Set) 이용



아래는 예시 코드

```
const m = new Map();

m.set('a', 'b'); // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값을 키로 사용 가능합니다
const d = {};
m.set(d, 'e'); // 객체도 됩니다

m.get(d); // get(키)로 속성값 조회
console.log(m.get(d)); // e

m.size; // size로 속성 개수 조회
console.log(m.size) // 3

for (const [k, v] of m) { // 반복문에 바로 넣어 사용 가능합니다
  console.log(k, v); // 'a', 'b', 3, 'c', {}, 'e'
} // 속성 간의 순서도 보장됩니다

m.forEach((v, k) => { // forEach도 사용 가능합니다
  console.log(k, v); // 결과는 위와 동일
});

m.has(d); // has(키)로 속성 존재 여부를 확인합니다
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성을 삭제합니다
m.clear(); // clear()로 전부 제거합니다
console.log(m.size); // 0
```



### 널 병합/옵셔널 체이닝


??(널 병합(nullish coalescing)) 연산자

: 주로 || 연산자 대용. falsy 값 중 null과 undefined만 따로 구분

```
const a = 0;
const b = a || 3; // || 연산자는 falsy 값이면 뒤로 넘어감
console.log(b); // 3

const c = 0;
const d = c ?? 3; // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감
console.log(d); // 0;

const e = null;
const f = e ?? 3;
console.log(f); // 3;

const g = undefined;
const h = g ?? 3;
console.log(h); // 3;
```


### ?.(옵셔널 체이닝(optional chaining)) 연산자

: null이나 undefined의 속성을 조회하는 경우 에러가 발생하는 것을 막음.

일반적인 속성뿐만 아니라 함수 호출이나 배열 요소 접근에러도 막음.

c?.d와 c?.f(), c?.[0]의 값은 undefined가 됨.

TypeError: Cannot read properties of undefined 또는 null 에러의 발생 빈도를 획기적으로 낮출

```
const a = {}
a.b; // a가 객체이므로 문제없음

const c = null;
try {
  c.d;
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'd')
}
c?.d; // 문제없음

try {
  c.f();
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading 'f')
}
c?.f(); // 문제없음

try {
  c[0];
} catch (e) {
  console.error(e); // TypeError: Cannot read properties of null (reading '0')
}
c?.[0]; // 문제없음
```


## 2.2 프런트엔드 자바스크립트


### AJAX asynchronous Javascipts And Xml

: 비동기적 웹 서비스를 개발할 때 사용한느 기법. 페이지 이동 없이 서버에 요청을 보내고 응답을 받는 기술

꼭 xml 사용할 필요x, 요즘 json 많이 사용하는 추세.


### 요청

: jQuery나 axios 같은 라이브러리 이용해서 보냄. 다양한 종류가 있음.


브라우저에서 기본 제공 객체인XMLHttpRequest, fetch는 복잡하고 서버에서 사용 할 수 없음

-> 본 책에서 axios 중심 설명


프론트엔드에서 AJAX사용을 위해서는 html 파일을 만드는 것으로 시작함.

```
// front.html

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  // 여기에 예제 코드를 넣으세요
</script>
```


GET 요청을 보내는 코드의 예시를 살펴보자

```

// 예시 1 - 프로미스 방식

axios.get('https://www.zerocho.com/api/get')
  .then((result) => {
    console.log(result);
    console.log(result.data); // {}
  })
  .catch((error) => {
    console.error(error);
});
```

* axios.get도 내부에 new Promise가 들어 있으므로 then과 catch를 사용 가능.

* result.data에 서버로부터 보낸 데이터가 들어있다 가정.


```
// 예시 2 - async/await 방식

(async () => {
  try {
    const result = await axios.get('https://www.zerocho.com/api/get');
    console.log(result);
    console.log(result.data); // {}
  } catch (error) {
    console.error(error);
  }
})();
```


### POST 방식의 요청 보내기

```
(async () => {
  try {
    const result = await axios.post('https://www.zerocho.com/api/post/json', {
      name: 'zerocho',
      birth: 1994,
    });
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
```

전체적인 구조는 GET 요청을 보내는 것과 유사하지만, get이 아닌 post를 사용한다는 점과 두 번째 인수로 데이터를 넣어 보내는 것이 다르다.



### FormData

: HTML form 태그의 데이터를 동적으로 제어. AJAX와 함께 사용.

서버에 폼을 보내는 방식


```
// FormData 

const formData = new FormData();
formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('item'); // true
formData.has('money'); // false;
formData.get('item');// orange
formData.getAll('item'); // ['orange', 'melon'];
formData.append('test', ['hi', 'zero']);
formData.get('test'); // hi, zero
formData.delete('test');
formData.get('test'); // null
formData.set('item', 'apple');
formData.getAll('item'); // ['apple'];
```

append 메서드로 키-값 형식으로 데이터를 저장.

append 메서드를 여러번 사용해서 키 하나에 여러개의 값 추가 가능.

delete 메서드는 현재 키를 제거하는 메서드.

set 메서드는 현재 키를 수정하는 메서드


```
(async () => {
  try {
    const formData = new FormData();
    formData.append('name', 'zerocho');
    formData.append('birth', 1994);
    const result = await axios.post('https://www.zerocho.com/api/post/formdata', formData);
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
```


** 나근데 이거 입력하면 오류 뜸

>>> axios is not defined






### encodeURIComponent
: AJAX 요청을 보낼 때 주소에 있는 한글 이름을 모르면 발생하는 오류를 해결하는 방법 . 한글 주소만 해당 함수로 감싼다.

```
(async () => {
  try {
    const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
    console.log(result);
    console.log(result.data); // {}
  } catch (error) {
    console.error(error);
  }
})();
```

한글 주소가 영어, 숫자, %특수기호의 조합으로 바뀐다.

브라우저나 노드에 이용할 수 있다.




### decodeURIComponent

: 방금 전 encodeURIComponent로 인해서 바뀐 조합을 다시 한글로 되돌린다.




서버에서 보내준 데이터를 프런트엔드에 넣을 때 주의점

1. 보안 : 비밀번호 등의 주요 정보는 프런트엔드에 내려보내지 말라. 클라이언트를 믿지 말라

2. 데이터 속성 : html 태그의 속성으로 data-로 시작하는 것들을 엏는다. 화면에 나타나지 않지만 웹 구동에 필요하다. 자바스크립트로 쉽게 접근 가능하다.

```
<ul>
  <li data-id="1" data-user-job="programmer">Zero</li>
  <li data-id="2" data-user-job="designer">Nero</li>
  <li data-id="3" data-user-job="programmer">Hero</li>
  <li data-id="4" data-user-job="ceo">Kero</li>
</ul>
<script>
  console.log(document.querySelector('li').dataset);
  // { id: '1', userJob: 'programmer' }
</script>
```


3. dataset : html 태그에 반영된다.


dataset.monthSalary = 10000;
```
// 생성 속성 
 data-month-salary="10000"
```

## 2.3 함께 보면 좋을 자료


• MDN 자바스크립트(저자의 추천): https://developer.mozilla.org/ko/docs/Web/JavaScript

• ES 상세 후보군: https://github.com/tc39/proposals

• ES2015+ 브라우저/서버 호환 여부: http://kangax.github.io/compat-table/es6/

• 브라우저별 기능 지원 여부 확인: https://caniuse.com/

• 노드 버전별 ECMAScript 스펙: http://node.green

• AJAX 설명: https://developer.mozilla.org/ko/docs/Web/Guide/AJAX

• axios: https://github.com/axios/axios

• FormData 설명: https://developer.mozilla.org/ko/docs/Web/API/FormData

• ESLint 툴: https://eslint.org/

• 에어비앤비 코딩 스타일: https://github.com/airbnb/javascript

• 저자의 블로그 ES2015+: https://zerocho.com/category/EcmaScript

• 모던 자바스크립트 튜토리얼: https://ko.javascript.info/

﻿