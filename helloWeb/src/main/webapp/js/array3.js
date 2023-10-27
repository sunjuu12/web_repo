// array3.js 10.27
let pos = "Hello, Wolrd".indexOf("."); 

// indexOf는 찾는 값이 없으면 -1 반환
let names = ["콘", "무지", "라이언", "춘식이"];
pos = names.indexOf("무시");
if(pos == -1) {
	console.log("없는 이름입니다.");
} else {
	console.log("무지는 " + (pos+1) + "번째 위치에 있습니다.");
}

// {name: "", age: 20}
let members = [
	{name: "김민식", age: 22},
	{name: "강민식", age: 23},
	{name: "이만식", age: 26}
]
let search = "민식"
let count = 0;
members.forEach(member => {
	if (member.name.indexOf(search) > -1 ) {
		count++;
	}
})
console.log('민식이라는 이름은 ' + count + '명 있습니다.');


