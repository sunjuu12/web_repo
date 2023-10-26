// object6.js 
// Map, Set 140p

const map = new Map();

map.set("홍길동", 80); // 키 값 추가
map.set("김길동", 85);
map.set("김길동", 90);
// map.delete("김길동"); // 키 값 삭제

// map은 키 값에 배열값도 넣을 수 있음
const refval = [12];
map.set(refval, 88);
console.log(map.get(refval));

console.log(map.get("홍길동"));
for (let ent of map.entries()) { // 키:값 "배열" 타입으로 반환 
	console.log('이름: ', ent[0], ', 점수: ', ent[1]);
}

map.forEach(function(val, key, map) {
	if (key == '홍길동'){
		console.log(val, key, map);
	}
})

// 맵 <-> 배열
const ary =[['프로도', 3], ['라이언', 5], ['어피치', 4]];
// 배열 타입을 맵 타입으로 변환하기 위해 맵 생성자의 매개값으로 배열 넣어줌
const fmap = new Map(ary);
for(let ent of fmap.entries()) {
	console.log('키: ', ent[0], ', 값: ', ent[1]);
}

const entries = fmap.entries();
console.log(entries); // entries: MapIterator 타입
console.log(Array.from(fmap)); // 맵 -> 배열로 변환

console.clear();

// Set: 중복된 값 허용 X 144p
const set1 = new Set();
set1.add('라이언');
set1.add('프로도');
// 문자값일 경우 같은 값, 배열일 경유 다른 값으로 처리
set1.add(['어피치', 4]);
set1.add(['어피치', 4]);

console.log(set1.size);
set1.forEach(function(val, item, set) {
	console.log(val, item, set);
})

// Set <-> 배열
const setAry = ['라이언', '프로도', '무지', '무지']
const set2 = new Set(setAry); // 중복된 값 제거시 용이함
console.log(set2.size);
console.log(Array.from(set2)); // 셋 -> 배열