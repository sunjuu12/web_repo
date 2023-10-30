// ajax2.js 10.30
import { table } from './ajaxMoudule.js';

// onclick 이벤트 등록 onclick="addMember()"
// . 뒤에는 속성  member = {name:"hong", age:20} member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e) {// 익명 함수
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	const xhtp = new XMLHttpRequest(); // 비동기방식으로 처리해주는 것
	// '서블릿?patam=val&param=val' => 경로 맞춰줘야함 => AddMemberServ는 js보다 상위 폴더에 있음.
	// 백엔드에서 정보를 가지고 오는 것.(백엔드 기능)
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass +
	'&name=' + name + '&phone=' + phone);
	xhtp.send();
	
	xhtp.onload = function () {
		console.log(xhtp.responseText);
		// 사용자가 입력한 값: retCode = OK => {vo: mid, pass, name, phone}
		// tr 생성해서 하위에 td 생성 -> 화면 출력 id='list'의 innerHTML 속성 활용
		// retCode = NG => alert('처리중 에러'
		let result = JSON.parse(xhtp.responseText);
		if ( result.retCode == "OK" ) {
		    document.getElementById('list').innerHTML += table.makeTr(result.vo);
		} else {
			alert('처리 중 에러(회원아이디: ' + result.vo.mid + ')');
		}
	}
} // end of function addMember(e)

function modMember(e) {
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../ModMemberServ.html?mid=' + mid + 
		'&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText);
		console.log(result); // retCode: OK/NG , vo: mid, pass, name, phone 값을 가지고 옴
		// 화면의 데이터 영역에 있는 tr 다 가져오기 // id list에 해당하는 tr 만 가져오기
		console.log(document.querySelectorAll('#list tr'));
		document.querySelectorAll('#list tr').forEach( tr => {
			console.log(tr.children)
			if (tr.children[0].innerHTML == result.vo.mid) { // id 값이 같을 경우
				tr.children[1].innerHTML = result.vo.pass;
				tr.children[2].innerHTML = result.vo.name;
				tr.children[3].innerHTML = result.vo.phone;
			}
		}) 
			
	}
}

