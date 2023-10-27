// ajaxModule.js

const table = {
	makeHead(titles = ['회원 아이디', '비밀번호', '이름', '연락처']) {
		let headTag = "<thead><tr>";
		titles.forEach(title => {
			headTag += "<th>" + title + "</th>";
		})
		headTag += "</tr></thead>";
		return headTag;
	},
	makeBody(dataAry = [{mid, pass, name, phone}]) { // [{}] => 형식대로 배열 안은 객체로 오는게 좋음
		let bodyTag = "<tbody id='list'>";
		dataAry.forEach(item => {
			bodyTag += "<tr>";
			for (let prop in item) {
				bodyTag += "<td>" + item[prop] + "</td>";
			}
			bodyTag += "</tr>";
		}) 
		bodyTag += "</tbody>";
		return bodyTag;
	},
	makeTable(titleAry, dataAry) {
		let tableTag = "<table border='1'>"
		tableTag += this.makeHead(titleAry) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	}
}

export { table };