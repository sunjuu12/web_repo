// booklist1.js

import { table } from './booklist.js';

let xhtp = new XMLHttpRequest();
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson();

function loadJson() {
	console.log(xhtp.responseText);
	let titles = ["도서코드", "도서명", "저자", "출판사", "가격", "삭제"];
	let dataAry = [];
	result.forEach(ary => {
		dataAry.push({
			book_code: ary.book_code,
			book_title: ary.book_title,
			book_author: ary.book_author,
			book_press: ary.book_press,
			book_price: ary.book_price
		})
	})
	result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;	
}