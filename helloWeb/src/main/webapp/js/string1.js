// string1.js

let str1 = "Hello"; // 기본 데이터 타입
let str2 = new String("Hello"); // 객체

console.log(typeof str1, typeof str2); 
console.log(str1 == str2); // 두 개의 값만 비교
console.log(str1 === str2); // 값과 타입 비교

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.  ".trim();
console.log(result, '문자 개수: ', result.length);

// trim(): 문자열 앞 뒤 공백 제거, trimStart(): 문자열 앞쪽 공백 제거, trimEnd(): 문자열 뒤쪽 공백 제거
// repalce(), split(), slice(), substring(), substr()
// toString(), indexOf(), lastIndexOf(), charAt(), includes()
// concat() - 문장 연결

// repalce(): 문자열 안에 있는 공백 제거
// 첫번째오는 ,만 바꿀 수 있음
result = "Hello, World, Nice, World".replace(',','.'); // 문장 안의 ,를 .로 바꿀 때 
console.log(result);
// 모든 공백 제거시, 정규 표현식 사용 정규 표현식 = /\s/g
result = "Hello, World, Nice, World".replace(/,/g,'.'); // g는 글로벌을 의미 
// [] 배열 객체 , {} object 객체, /값/ => 정규 표현식 객체
console.log(result);

// split(): 공백 기준으로 한글 분리
// slice(): 시작 인덱스와 끝 인덱스 사이 범위의 문자열 반환
const str3 = 'this is the only one story';
console.log('splie: ', str3.slice(8, 11));

// substring(): 인덱스 값 음수 입력시 0으로 대체
// substr(): 첫번째 파라메터는 시작 인덱수, 두번째 파라메터는 가져올 문자열 길이
const str4 = 'This is the only one story';
console.log('substr: ',str4.substr(8, 11));

// toString(): 숫자를 문자열로 변경
// indexOf(): 찾은 문자열의 시작 위치 반환, 앞에서부터 검색
// lastIndexOf(): 뒤에서부터 검색
// charAt(): 파라메터 값에 설정된 해당 위치의 문자 1개 반환
// includes(): 파라메터 값에 설정된 특정 문자열이 있으면 true, 없으면 false 반환