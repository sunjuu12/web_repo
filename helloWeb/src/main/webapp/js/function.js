// std, score은 매개변수(=파라미터) => 함수 안에서 사용하는 변수
        // 초기값 설정해두면 값이 안 들어왔을 때 사용
        // 함수 선언 (함수 선언, 함수 표현식 두 가지 방식 있음 함수 선언이 전통적 방법)
        // function myFunc(std, score = 60) {
        //     // if(score == undefined) {
        //     //     score = 0;
        //     // }
        //     console.log(`${std} 점수는 ${score}점`)
        //     return score; // retrun 구문이 없으면 undefined 값
        // }
        // // 매개 값(=아규먼트)
        // myFunc('홍길동');
        // console.log(myFunc('홍길동'));

        // 함수 표현식
        var myFunc = function myFunc(std, score = 60) {
            console.log(`${std} 점수는 ${score}점`)
            return score;
        }
        // let myFunc = myFunc('홍길동');
        console.log(myFunc(`홍길동`));