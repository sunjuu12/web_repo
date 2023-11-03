/**
 * js/student.js
 */
// export가 default 일 경우 svc 에 괄호 안 넣어야 됨
import svc from './service.js';
// 페이지가 로딩되면서 바로 실행
// 비동기방식코드 -> 순차적 가독성 높이기  async, await
/* 
async 함수(
	await 처리 (promise 객체)
	await 처리 (promise 객체)
	await 처리 (promise 객체)
)
*/
// @@@@@ 학생 목록 출력 @@@@@@@

/*
async function studentList() {
	let req = await fetch('../studentList.do') // 처리가 다 끝나길 기다렸다가 요청 정보에 값을 담아줘야함
	let json = await req.json(); // promise 값을 json으로 바꾸는 것 // {"retCode":"OK"}->{retCode:"ON"} 이것이 json 방식임
	let tbody = document.querySelector('#list');
	// json 데이터가 정상적으로 처리된 경우 진행.
	try {
		json.forEach(student => {
			tbody.append(makeTr(student));
		})
	} catch (err) {
		console.log('error => ', err);
	}
}

fetch('../studentList.do')
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	})
	.catch(err => console.log('error=> ', err));
*/

// svc.studentList(function(result) {}, function(err) {}); // 함수 형태 밑은 화살표 함수 이용
svc.studentList(
	// 성공 후 실행 함수
	result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));	
		})	
	}, 
	// 실패시 실행 함수
	err=>console.log('error=> ', err)); // 성공하면 받아올 값 result, 실패시 err

// 등록 버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback);

//수정 버튼 이벤트  서블릿(db변경) -> 화면 변경
document.querySelector('#modBtn').addEventListener('click', modifyCallback);

// @@@@@ 등록 @@@@@
// callback 함수
function addCallback(e) { // event가 매개값으로 정의되어 있음
	// 학생 아이디 입력값 
	let sid = document.querySelector('input[name=id]').value; // input태그에 name이 id가 가지고 있는 value값을 변수에 담음
	let sname = document.getElementById('name').value; // id로 value 값 가지고 오기
	let spass = document.querySelector('#password').value;
	let sdept = document.querySelector('select[name=sdept]').value;
	let sbir = document.getElementById('bir').value;
	console.log(sid, sname, spass, sdept, sbir);

	let param = `id=${sid}&name=${sname}&pass=${spass}&dept=${sdept}&bir=${sbir}`; // 파라매터이름=${값}
	console.log(param);

	// ajax 호출
	// get : url패턴, 값의 제한
	// post : 파라미터 표현 x, 값의 제한 x, content-type 지정
	// fetch('../addStudent.do?' + param) // get 방식 요청 

	svc.addStudent(
		// optObj
		{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		},
		// successCallback
		result => {
			if (result.retCode == "OK") {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: sbir });
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		},
		// errorCallback
		err => console.log('error => ', err)
	);
	/*
	fetch('../addStudent.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == "OK") {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: sbir });
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		})
		.catch(err => console.log('error => ', err));
	*/
} // end addcallback

// @@@@@ 수정 @@@@@@
function modifyCallback(e) {
	let id = document.querySelector('.modal-body input[name=sid]').value;
	let pass = document.querySelector('.modal-body input[name=pass]').value;
	let name = document.querySelector('.modal-body input[name=name]').value;
	let bir = document.querySelector('.modal-body input[name=birth]').value;
	
	let param = `sid=${id}&pass=${pass}&name=${name}&birth=${bir}`;
	
	svc.editStudent(
		// optObj
		{
			method: 'post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: param
		},
		// successCallback
		result => {
			if ( result.retCode == "OK") {
				 alert('성공');
				 let targetTr = document.querySelector('tr[data-sid='+result.vo.studentId+']');
				 let newTr = makeTr(result.vo);
				 let parentElem = document.querySelector('#list');
				 parentElem.replaceChild(newTr, targetTr); // newTr로 바꾸겠다, 부모 요소에서 자식 요소로 바꿀 때 주로 사용
				 document.getElementById("myModal").style.display = 'none';
			}
			else {
				alert('실패');
			}
		},
		// errorCallback
		err => console.log('error => ', err)
	);
	
/*	fetch('../editStudent.do', {
		method: 'post',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body: param
	})
	.then(resolve => resolve.json())
	.then(result => {
			 console.log('result:', result);
		if ( result.retCode == "OK") {
			 alert('성공');
			 let targetTr = document.querySelector('tr[data-sid='+result.vo.studentId+']');
			 let newTr = makeTr(result.vo);
			 let parentElem = document.querySelector('#list');
			 parentElem.replaceChild(newTr, targetTr); // newTr로 바꾸겠다, 부모 요소에서 자식 요소로 바꿀 때 주로 사용
			 document.getElementById("myModal").style.display = 'none';
		}
		else {
			alert('실패');
		}
	})
	.catch(err => console.log('error => ', err))*/
} // end modyfmodifyCallback

// tr 생성함수 callback 함수
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	
	// tr 클릭시 모달창 이벤트 추가
	tr.addEventListener('dblclick', showModal);
	tr.setAttribute('data-sid', obj.studentId);

	for (let prop of showFields) { // center가 가지고 있는 속성 개수 만큼 루핑
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	} 
	
	// 삭제 버튼 (td 안에 넣어서 만들어야 함)
	let td = document.createElement('td');
	let btn = document.createElement('button');

	btn.setAttribute('data-sid', obj.studentId); // 버튼에 아이디 값 생성
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {
		// ajax 호출 -> servlet 실행
		
		svc.removeStudent(
			// id
			obj.studentId,
			// successCallback
			result => {
				console.log(result);
				if (result.retCode == "OK") {
					alert("삭제 성공");
					tr.remove();
				} else {
					alert("삭제 실패");
				}
			},
			// errorCallback
			err => console.log('error => ', err)
		);
	
		/*fetch('../delStudent.do?sid=' + obj.studentId)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (result.retCode == "OK") {
					alert("삭제 성공");
					tr.remove();
				} else {
					alert("삭제 실패");
				}
			})
			.catch(err => console.log('error => ', err))
*/
	}) // end btn 이벤트
	td.append(btn);
	tr.append(td);

	return tr;
} // end makeTr

// 모달 보여주기
function showModal(e) {
	console.log(e.target.parentElement, this) // 이벤트를 받는 타켓
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; // 'data-sid' : std1
	console.log(id);
	
	svc.getStudent(
		// id
		id,
		// successCallback
		result => {
			// Get the modal
			modal.style.display = "block";
			
			console.log('result: ',result);
			console.log('result.vo.studentName: ', result.vo.studentName);
			modal.querySelector("h2").innerHTML = result.vo.studentName;
			modal.querySelector("input[name=sid]").value = result.vo.studentId;
			modal.querySelector("input[name=pass]").value = result.vo.studentPassword;
			modal.querySelector("input[name=name]").value = result.vo.studentName;
			modal.querySelector("input[name=birth]").value = result.vo.studentBirthday;
		},
		// errorCallback
		err => console.log('error => ', err)
		
	);
	
	/*fetch("../getStudent.do?sid=" + id)
		.then(resolve => resolve.json())
		.then(result => {
			// Get the modal
			modal.style.display = "block";
			
			console.log('result: ',result);
			console.log('result.vo.studentName: ', result.vo.studentName);
			modal.querySelector("h2").innerHTML = result.vo.studentName;
			modal.querySelector("input[name=sid]").value = result.vo.studentId;
			modal.querySelector("input[name=pass]").value = result.vo.studentPassword;
			modal.querySelector("input[name=name]").value = result.vo.studentName;
			modal.querySelector("input[name=birth]").value = result.vo.studentBirthday;
		})	
		.catch(err => console.log('error => ', err));*/
	// Get the modal
	var modal = document.getElementById("myModal");


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";

	// let data = {id:studentId, name:studentName, pass: studentPassword, birth:studentBirthday};
	
	

	// 닫기 이벤트
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}