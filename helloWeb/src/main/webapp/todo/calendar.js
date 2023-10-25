// calendar.js

// makeHead()

const monAry = ['일',' 월', '화', '수', '목', '금', '토'];
const daysAry = [1, 2, 3, ... 31];
console.log(monAry);
console.log(days);



class Calendar {
  makeHead() {
    let head = '';
    head += `<table border="1">`;
    head += `<caption>10월</caption>`;
    head += `<thead><tr>`;
    for (let day of monAry) {
      head += `<th>${day}</th>`;
    }
    head += `</tr></thead></table>`;
    return head;
  }

	// makeBody()
	makeBody() {
		for (let i = 0; i < daysAry.length; i++) {
	        if (i % 7 == 0) {
	            tr += '<tr>'; 
        	}
        		for(let j = 0; j = 6; j++) {
					tr += `<td>${datesArray[i]}</td>`;
				}
			        if (i == daysAry.length - 1) {
			            tr += '</tr>'; 
			        }
    	}
    	return tr;
	}// end makeBody
	
	// makeCalendar();
	makeCalendar() {
	    const head = this.makeHead();
	    const body = this.makeBody();

    return `<table>${head}${body}</table>`;
  } // end makeCalendar();
	
	}
	
Calendar.makeHead(monAry);
document.getElementById('calendarContainer');
