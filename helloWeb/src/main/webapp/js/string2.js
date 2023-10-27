// string2.js

const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore assumenda unde, dolorem necessitatibus iusto enim magnam voluptatem ullam blanditiis fuga quidem exercitationem sed maiores ut aliquid deserunt vitae ipsam!';

// 1. 각각의 단어 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력
let result = words.split(" ");
console.log(result);
for ( let i = 0; i < 30; i++){
	if ( result[i].length >= 5) {
		console.log(result[i]);
	}
}

// 2. 주민번호 입력 => 남자/여자 구분하는 함수
function checkGender(ssn) {
	//950305 1645782 공백 ㅇ, 9503051645782 공백 x, 950305-1645782
	if ( ssn.includes(" ") == true){
		if (ssn.charAt(7) == 1 || ssn.charAt(7) == 3) {
			return '남자'
		} else if (ssn.charAt(7) == 2 || ssn.charAt(7) == 4) {
			return '여자'}
	}
	else if ( ssn.includes('-') == true) {
		if (ssn.charAt(7) == 1 || ssn.charAt(7) == 3) {
			return '남자'
		} else if (ssn.charAt(7) == 2 || ssn.charAt(7) == 4) {
			return '여자'}
	}
	else {
		if (ssn.charAt(6) == 1 || ssn.charAt(6) == 3) {
			return '남자'
		} else if (ssn.charAt(6) == 2 || ssn.charAt(6) == 4) {
			return '여자'}
	}
}
// 뒤에서 7글자 잘라내서 첫번째 값 읽어오는 코드 해보깅
console.log('성별: ',checkGender('888888-356622'));
console.log('성별: ',checkGender('888888-456622'));
console.log('성별: ',checkGender('888888-256622'));

// 3. 파일명과 파일의 확장자
let file = "d:/temp/sample/book.xls";
// 파일명과 파일 확장자를 추출해서 fileName과 fileExt에 각각 저장하여 콘솔에 출력
let fileName = file.match('book'); 
let fileExt = file.match('xls');
console.log('파일명: ', fileName[0]);
console.log('파일 확장자: ', fileExt[0]);