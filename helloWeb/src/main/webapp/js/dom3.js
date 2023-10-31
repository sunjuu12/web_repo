// dom3.js
// table>(thaed>tr>th*5)+(tbody>tr>td*5) * 건수
import table from './domTable.js'; // export 할 때 default 값을 이용하면 {} 사용하면 안 됨. 

let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=mMMKYpDAGv1QrPKWMkJYxa3CZ2yv8gXEIDQEGYDABp50c%2FjJ7Hi%2FfXQamGnK11agVujMSZbElT0zdxNi1m5h1g%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처', '위도', '경도'];

fetch(url) // 순차적으로 실행하는 코드
	// function(resolve) {return resolve.json()}
	.then(resolve => resolve.json())
	.then(fetchCallback)
	.catch(err => console.log('error => ', err));


// fetch에 의해 호출되는 함수. callback 함수
function fetchCallback(result) { // result = resolve.json()
	
	let rawData = result.data; // 원래 데이터
	console.log(rawData[0]);
	let sidoAry = []; // sidoAry에 sido 정보를 중복된 값 제거 후 넣기
	rawData.forEach(center => {
		if (sidoAry.indexOf(center.sido) == -1) { // -1은 값이 없다는 것
			sidoAry.push(center.sido);
		}
	})
		//console.log(sidoAry);

	let selectsido = document.querySelector('#sidoList');
	sidoAry.forEach(sido => {
		let option = document.createElement('option');
		option.innerHTML = sido;
		selectsido.append(option);
	})
		
	// selectsido 태그에 change 이벤트 발생. // 이벤트와 관련된 속성은 on~ 시작
	/*
	selectsido.addEventListener('change', function(e) { // change 라는 이벤트가 발생하면 익명함수로 값을 불러옴
		console.log(e.target.value);
		let searchSido = e.target.value; // 찾을 시도 값
		// 선택된 시도 값에 맞는 센터명만 출력
		let filterAry = rawData.filter(center => center.sido == searchSido);
		console.log(filterAry);
		genTable(filterAry);
	})
	*/
	// Callback 함수  changeCallback() 이렇게 적으면 이벤트를 등록하기 전에 발생하기에 () 없어야됨.
	selectsido.addEventListener('change', changeCallback);
	function changeCallback(e) { // e는 event임
		console.log(e.target.value);
		let searchSido = e.target.value; // 찾을 시도 값
		// 선택된 시도 값에 맞는 센터명만 출력
		let filterAry = rawData.filter(center => center.sido == searchSido);
		console.log(filterAry);
		genTable(filterAry);
	}

		// 이벤트와 상관없음
	let filterAry = rawData.filter((center, idx) => idx < 10);
	genTable(filterAry);
	//genTable(rawData); // 초기데이터로 화면 출력
		
} // end fetchCallback

function genTable(rawData = [], page = 1) { // 테이블을 그려주는 코드
	// 초기화
	// documemt.getElementById("show").innerHTML = '';
	document.querySelector('#show').innerHTML = '';
	// 전체 rawData로 출력
	// thead 생성
	let thead = table.makeHead(titles); // 헤더 정보
	// map을 reduce로 바꿔보시오. filter는 map이 안 됨, map은 새로 창 띄우는게 안 됨.
	/*
	let MapData = rawData.map(center => { // 매핑 작업 할 거임 => 매핑 정보 출력
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''), // replace 문자열 교체
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		return newCenter;
	});
	*/
	//----------------------------------------
	// reduce 사용
	let mapData = rawdata.reduce((acc, center) => {
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat : center.lat,
			lng : center.lng,
			lat: center.lat,
			lng: center.lng
		}  //새로운 객체 생성 

		acc.push(newCenter);  //생성한 객체를 acc[]에 집어넣기 
		return acc;
  },[]);
	console.log(ReduceData);
	//-----------------------------------------
	// tbody 생성
	let tbody = table.makeBody(ReduceData); // [{}, {}, {} ... {}]

	// table 생성
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl); // css요소로 찾아오는 방법
	// append는 두가지 값 받아올 수 있음. appendChild는 하나만 받을 수 있음.
	
	// tr 클릭 이벤트 등록 / tr을 다 가져와서 이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr'); // tbody 밑에 있는 tr
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			let lat = tr.children[4].innerHTML;
			let lng = tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x='+lat+'&y='+lng;
			// 새 탭에 열도록 하는 것 
			window.open('daumapi.html?x='+lat+'&y='+lng);
		})
	})
} // end genTable