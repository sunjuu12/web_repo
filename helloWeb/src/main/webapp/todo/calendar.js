// calendar.js

// makeHead()

const monAry = ['일',' 월', '화', '수', '목', '금', '토'];
const days = new Date();
console.log(monAry);
console.log(days);

class calendar {
	makeHead(monAry) {
	let head = '';
	head += `<table border = "1"><thead>`;
	head += `<h3>`+ '10월' +`</h3>`;
	head += `<tr>`;
	for ( let mon in monAry) {
		head += `<th>`+monAry[mon] + '</th>';
	}
	
	head += `</tr></thead></table>`;
	return tr;
	} // end makeHead
	
	// makeBody()
	makeBody() {
		let tr = '';
		for (let i = 1; i <= days; i++) {
			if(i % 7 == 0) {
				tr += `<tr>`;
				tr += `<td>`+ days +`</td>`;
				tr += `</tr>`;
			}
		} 
	}// end makeBody
	
	// makeCalendar();
	makeCalendar() {
		
	}
	// end makeCalendar();
	}
	
calendar.makeHead(monAry);
