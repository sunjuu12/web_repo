// booklist.js

const table = {
	
	makeHead(titles = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']) {
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += title;
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	
	makeBody(dataAry = [{bookCode, bookTitle, bookAuthor, bookPress, bookPrice}]) { // [{}] => 형식대로 배열 안은 객체로 오는게 좋음
		let bodyTag = "<tbody id='list'>";
		dataAry.forEach(item => {
			bodyTag += this.makeTr(item);
		}) 
		bodyTag += "</tbody>";
		return bodyTag;
	},
	
	makeTable(titleAry, dataAry) {
		let tableTag = "<table border='1'>"
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	},
	
	makeTr(book = {}) { //객체 
		let trTag = `<tr onclick='showInfo(event, this)'>`;
		for (let prop in book) {
			trTag +=  book[prop] ;
		}
		trTag += '<button onclick="this.parentElement.parentElement.remove()">삭제</button>';
		trTag += `</tr>`;
		
		return trTag;
	}
}

export { table };
