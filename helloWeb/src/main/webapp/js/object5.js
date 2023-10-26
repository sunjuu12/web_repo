// object5.js
// 객체의 복사 120p ~
const obj1 = {
	name: "Hong",
	age: 20,
	weight: 66.8
	// bloodType
}

const obj3 = obj1;

// 객체를 만들어주기 위한 선언 메소드
// object 메소드에 assign 정적 메소드 {}안은 새로은 obj 뒤에 obj1은 참조 객체임
// {} 안에 정보가 있을 경우에는 같은 속성이 있을 경우 덮어씀.
// obj1에 없는 경우는 신규 값으로 만들어짐.
const obj2 = Object .assign(
	{name:"Hwang", age:22, height:123.4}, obj1);

console.log("obj2: ", obj2);
console.log("obj3: ", obj3);

// 객체의 상속
const obj4 = Object.create(obj1) // 참조 값만 가지고 있음
// 상속을 통해서 자식객체를 생성하면 부모객체를 참조.
obj4.name = "Kim"; // 자삭의 값을 바꿔주면 부모의 값과 상관없이 바뀐 값으로 유지됨.
obj4.age = 23;
obj1.name = "Hwang";
console.log("obj4: ", obj4.name);
console.log("obj4: ", obj4.age);

// 객체의 속성 정의, 객체의 속성기술자 136p
 // obj1.bloodType = "O";
 // 속성기술자 defineProperty
Object.defineProperty(obj1, 'bloodType', { // get, set 직접 정의, get 안에 function은 속성임
	set: function(bt) {
		if (bt == "A" || bt == "B" || bt == "AB" || bt == "O" ) {
			this._bloodType = bt;
		} else {
			console.log("잘못된 유형입니다.");
			this._bloodType = "A";
		}
	}, get: function() {
		return this._bloodType;
	}
})
obj1.bloodType = "AB"; // set
console.log(obj1.bloodType); // get

// 속성 정의 시 속성값과 this객체의 속성을 달리하는 이유?


