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