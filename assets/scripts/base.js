// 객체 내에서 여러 방식으로 함수를 선언

const pet = {
    name: '구름',
    eat: function(food) {
        alert(this.name + '은/는 ' + food + '을/를 먹습니다.');
    },
    play(doWhat) {
        alert(this.name + '은/는 ' + doWhat + '을/를 하고 놉니다.');
    },
    anonFunc: function() { // 일명 함수는 this로 자신을 참조한다.
        console.log(this);
    },
    call: () => { // 화살표 함수는 this로 자신을 참조하지 못한다.
        console.log(this);
    },
}

pet.anonFunc();
pet.call();



const student = {
    이름: '김창완',
    취미: '사진찍기',
    장래희망: '로또 당첨'
}

delete student.장래희망;



Number.prototype.power = function(n = 2) { // prototype으로 객체화된 Number 자료형에 대한 메소드 생성
    return this.valueOf() ** n;
}

const testNum = 12;

console.log('입력된 값 제곱하기:' + testNum.power());

const testString = '안녕하세요';

console.log('입력된 값의 index 찾기:' + testString.indexOf('녕하')); // indexOf() 메소드는 이미 존재하기 때문에, 객체화된 문자열 자료형에 사용할 수 있다.



String.prototype.contain = function(data) {
    return this.indexOf(data) >= 0;
}

Array.prototype.contain = function(data) {
    return this.indexOf(data) >= 0;
}

const containString = '반갑습니다';

console.log('문자열에서 입력한 값이 존재하는지 찾기:' + containString.contain('습니'));

const containArray = [241, 535, 234, 745, 9911, 324];

console.log('배열에서 입력한 값이 존재하는지 찾기:' + containArray.contain(241));
console.log('배열에서 입력한 값이 존재하는지 찾기:' + containArray.contain(5));



Number.prototype.isEven = function(data) { // 내 마음대로 만든 홀짝 구분 메소드
    return this.valueOf(data) % 2 === 0;
}

const evenTest = 64;

console.log('입력된 값의 홀짝 구분:' + evenTest.isEven());



const jsonData = [
    {
        name: '아주 비싼 동화책',
        price: 30000,
        publisher: '나무야 미안해'
    },
    {
        name: '저렴한 만화책',
        price: 5500,
        publisher: '꿀잼코믹스'
    }
];

const dataToJSON = JSON.stringify(jsonData);

console.log(dataToJSON); // minified된 형태로 표현된다.
console.log(JSON.stringify(jsonData, null, 4)); // 2번째 매개변수는 특성 속성만 선택해서 추출할 수 있음. 3번째 매개변수는 들여쓰기 칸 수

const unJSON = JSON.parse(dataToJSON); // 두 개의 객체가 포함된 배열, 즉 처음 선언했던 형태로 반환된다.

console.log(unJSON);



const randNum = Math.random(); // 0 ~ 1 사이의 랜덤한 숫자를 반환한다.

console.log(randNum);
console.log(randNum * 10);
console.log(randNum * 50);
console.log(randNum * 100);

console.log(randNum * 10 - 5); // -5 ~ 5 사이의 범위가 된다.

console.log(Math.floor(randNum * 5)); // 반올림하여 정수로 만든다.
console.log(Math.floor(randNum * 10 - 10)); // 음수도 가능하다.



let arrayA = [1, 2, 3, 4, 5];

const [alpha, beta, gamma] = arrayA; // 먼저 선언된 배열에서 0, 1, 2번째 요소에 이름을 할당한다.

console.log(alpha, beta, gamma);



const bookObject = {
    bookName: '소원을 이루는 책',
    bookPrice: 20000,
    publisher: '동네방네'
}

const { bookName, bookPrice } = bookObject; // 객체에서 여러 속성의 이름을 그대로 추출

console.log(bookName, bookPrice);

const { whatBook = bookName, howMuch = bookPrice } = bookObject; // 추출되는 속성을 다른 이름으로 지정한다.

console.log(whatBook, howMuch);



const newH1 = (text) => `<h1>${ text }</h1>`; // DOM 조작 테스트
const testDOM = document.getElementById('divDOM');

testDOM.innerHTML += newH1('H1 생성했다!');