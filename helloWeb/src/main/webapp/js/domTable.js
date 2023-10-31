/**
 * domTable.js
 */

// default쓰면 import할 때 이름 지정 가능
 export default { 
	 makeHead: function(titles = ['아이디', '센터명']) {
		 // thead>tr>th*n
		 let thead = document.createElement('thead');
		 let tr = document.createElement('tr');
		 titles.forEach(title => {
			 let th = document.createElement('th');
			 th.innerHTML = title;
			 tr.append(th);
		 })
		 thead.append(tr);
		 return thead;
	 },
	 makeBody: function(dataAry = []) {
		let tbody = document.createElement('tbody');
		dataAry.forEach(data => { // data는 반복 변수
			tbody.append(this.makeTr(data));
		})
		return tbody;
	 },
	 makeTr: function(center = {}) { // object 타입
	 	 // tr>td*n
		  let tr = document.createElement('tr');
		  for (let prop in center) { // center가 가지고 있는 속성 개수 만큼 루핑
			  let td = document.createElement('td');
			  td.innerHTML = center[prop];
			  tr.append(td);
		  }
		  return tr;
	 }
 }