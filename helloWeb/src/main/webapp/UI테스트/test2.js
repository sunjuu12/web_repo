// test2.js
const today = new Date();

const novemberCal = {
	
	makeHead() {
	 	const mons = ['일',' 월', '화', '수', '목', '금', '토'];
	    	return mons.reduce((acc, mon) => {
				return acc + `<th>`+ mon + `</th>`
			}, `<thead><tr>`)
	 }, // end makeHead
	 
	 makeBody() {
	 	let tbody = `</tr></thead><tbody><tr>`;
	 	tbody += `<td>` + '' + `</td>`;
	 	tbody += `<td>` + '' + `</td>`;
	 	tbody += `<td>` + '' + `</td>`;
	 	tbody += `<td>` + 1 + `</td>`;
	 	tbody += `<td>` + 2 + `</td>`;
	 	tbody += `<td>` + 3 + `</td>`;
	 	tbody += `<td style = "background:blue; color:white;>` + 4 + `</td>`;
	 	tbody += `</tr><tr>`;
		for (let i = 5; i <= 30; i++) {
			let styles = '';
			if (i == 5 || i == 12 || i == 19 || i == 26) {// 일요일
				styles = `background:red; color:yellow;`;
				if ( i == today.getDate()) {
					styles += 'font-weight: bolder';
				}
				tbody += `<td style = "`+ styles +`"align="right">` + i + `</td>`;
			} 
			else if (i == 4 || i == 11 || i == 18 || i == 25) {
				if ( i == today.getDate()) {
					styles += 'font-weight: bolder; ';
				}
				tbody += `<td style = " background:blue; color:white;`+ styles +`"align="right">` + i + `</td>`;
			} 
			else {
				
				 tbody += `<td style = "`+ styles +`"align="right">` + i + `</td>`;
			}
			if (i == 4 || i == 11 || i == 18 || i == 25  ) {
				 // 줄바꿈
		     	 tbody += '</tr><tr>';
	     	}	 
		}
		tbody += `</tr></tbody>`;
	    return tbody;
	 },// end makeBody
	 
	show() {
		 let thead = this.makeHead();
		 let tbody = this.makeBody();
		 let table = `<table border = "1"` + thead + tbody + `</table>`;
		 let show = document.getElementById('show').innerHTML = table;
	 }, // end novemberCal
}
novemberCal.show();