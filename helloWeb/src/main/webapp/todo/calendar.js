// calendar.js
const today = new Date();
console.log('오늘 날짜: ', today.getDate());
function makeHead() {
	  const mons = ['일',' 월', '화', '수', '목', '금', '토'];
    	return mons.reduce((acc, mon) => {
			return acc + `<th>`+ mon + `</th>`
		}, `<thead><tr>`)
} // end makeHead

	// makeBody()
function makeBody() {
	let tbody = `</tr></thead><tbody><tr>`;
	for (let i = 1; i <= 31; i++) {
		let styles = '';
		if (i % 7 == 1) {// 일요일
			styles = `background:red; color:yellow;`;
			if ( i == today.getDate()) {
				styles += 'font-weight: bolder';
			}
			tbody += `<td style = "`+ styles +`"align="right">` + i + `</td>`;
		} 
		else if ( i % 7 == 0) {
			if ( i == today.getDate()) {
				styles += 'font-weight: bolder';
			}
			tbody += `<td style = " background:blue; color:white;`+ styles +`"align="right">` + i + `</td>`;
		} 
		else {
			if ( i == today.getDate()) { // 오늘 날짜는 백그라운드:노란색, 폰트:bold
				 styles += 'font-weight:bolder; background:yellow;';
			 }
			 tbody += `<td style = "`+ styles +`"align="right">` + i + `</td>`;
		}
		if (i % 7 == 0) {
			 // 줄바꿈
	     	 tbody += '</tr><tr>';
     	}	 
	}
	tbody += `</tr></tbody>`;
    return tbody;
}// end makeBody
     

	
	// makeCalendar();
function makeCalendar() {
	let thead = this.makeHead();
	let tbody = this.makeBody();
	let table = `<table border = "1"`+ thead + tbody +`</table>`;
	
} // end makeCalendar();

function showCalendar() {
	let show = document.getElementById('show').innerHTML = table ;
}
cal.showCalendar();
	
