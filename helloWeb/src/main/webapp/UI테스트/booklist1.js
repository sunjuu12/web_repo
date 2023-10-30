// booklist1.js

import { table } from './booklist.js';

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson();
function loadJson() {
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	
	let titles = ["도서코드", "도서명", "저자", "출판사", "가격", "삭제"];
	let dataAry = [];
	
	result.forEach(book => {
		dataAry.push({bookCode: book.bookCode, bookTitle: book.bookTitle,
			 bookAuthor: book.bookAuthor, bookPress: book.bookPress, bookPrice: book.bookPrice})
	})
	result = table.makeTable(titles, dataAry);
	document.getElementById('show').innerHTML = result;
}