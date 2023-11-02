// dom3.js
// table>(thaed>tr>th*5)+(tbody>tr>td*5) * 건수
import table from './domTable.js'; // export 할 때 default 값을 이용하면 {} 사용하면 안 됨. 

// url은 공공데이터에서 가저온 데이터임 
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=mMMKYpDAGv1QrPKWMkJYxa3CZ2yv8gXEIDQEGYDABp50c%2FjJ7Hi%2FfXQamGnK11agVujMSZbElT0zdxNi1m5h1g%3D%3D';
let titles = ['센터id', '센터명', '시도', '연락처', '주소'];

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
	genTable(rawData); // 초기데이터로 화면 출력
	//let filterAry = rawData.filter((center, idx) => idx < 10);
	//genTable(filterAry);
		
} // end fetchCallback

function genTable(rawData = [], page = 1) { // 테이블을 그려주는 코드
	// 초기화
	// documemt.getElementById("show").innerHTML = '';
	document.querySelector('#show').innerHTML = '';
	document.querySelector('.pagination').innerHTML = '';
	// 첫번째, 마지막 => 계산
	let startNo = (page-1) * 5; // 1, 11, 21, ...
	let endNo = page * 5; // 10, 20, 30 ...
	
	// 첫번째, 마지막 페이지 => 계산
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 5); // ceil은 올림을 해줌 / 실제 마지막 페이지
	// 1페이지부터, 10페이지까지 보여주게 해줌 / 현재 페이지기준 마지막 페이지
	let endPage;
	if (page == 1 || page == 2 || page == 3 ) {
		endPage = Math.ceil(page / 5) * 5; 
	} else {
		endPage = page + 2;
	}
	let beginPage = endPage - 4;

	// 이전 페이지, 다음 페이지가 있는지
	let prevPage = false;
	let nextPage = false; 
	if ( beginPage > 1 ) {
		prevPage = true;
	}
	if ( endPage < lastPage) {
		nextPage = true;
	}
	if (endPage > lastPage) {
		endPage = lastPage;
	}
	// 이전 페이지 여부
	if (prevPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&laquo';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, beginPage - 1); // 클릭할 때 다음 페이지로 넘어감, i는 페이지 수임
			
		})
		document.querySelector('.pagination').append(aTag);
	}
	// 전체 페이지
	for (let i = beginPage; i <= endPage; i++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = i;
		// 해당 페이지 클릭시 색 변경
		if (i == page) {
			aTag.setAttribute('class', 'active');
		}
		aTag.addEventListener('click', function(e) {
			genTable(rawData, i); // 클릭할 때 다음 페이지로 넘어감, i는 페이지 수임
			beginPage = i-5;
		})
		document.querySelector('.pagination').append(aTag);
	}
	// 다음 페이지
	if (nextPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&raquo';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, endPage + 1); // 클릭할 때 다음 페이지로 넘어감, i는 페이지 수임
		})
		document.querySelector('.pagination').append(aTag);
	}
	
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
	let mapData = rawData.reduce((acc, center, idx) => {
		if(idx >= startNo && idx < endNo) {
			
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.sido,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng,
			address: center.address
		} 
		acc.push(newCenter); 
		}
		return acc;
  },[]);
	//-----------------------------------------
	// tbody 생성
	let tbody = table.makeBody(mapData); // [{}, {}, {} ... {}]

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
			let lat = tr.dataset.lat;  //tr.children[4].innerHTML;
			let lng = tr.dataset.lng; //tr.children[5].innerHTML;
			//location.href = 'daumapi.html?x='+lat+'&y='+lng;
			// 새 탭에 열도록 하는 것 
			window.open('daumapi.html?x='+lat+'&y='+lng);
		})
	})
} // end genTable