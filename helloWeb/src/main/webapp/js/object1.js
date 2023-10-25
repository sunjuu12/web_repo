// object1.js
// 클래스의 추가 메소드 작성, prototype 속성에 지정
Member.prototype.setBloodType = function (bloodType) {
	this.bloodType = bloodType
}
Member.prototype.getBloodType = function() {
	return this.bloodType;
}

const mem2 = new Member('홍길동', 22, 123.4);
mem2.setBloodType('AB');
console.log('홍길동', mem2.getBloodType());

// javascript 클래스 추가 기능. 선언되어있는 파일 안에서만 사용                                      가능
// 문자열을 가져와서 5글자만 남기고 자르는 function
String.prototype.truncate = function() {
	console.log(this);
	return this.substring(0, 5);
}
let result = "HelloWorld".truncate();
console.log(result);