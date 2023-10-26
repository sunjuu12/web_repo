// module.js
import {friendInfo} from "./friend.js";
import { cal } from "../todo/calendarObj.js";

const friend = {
	name: 'Hwang',
	phone: '010-3333-4444',
	address: '대구 중구 200번지',
	showInfo: function() {
		return `${this.name}`
	}
}

console.log(friend.showInfo());
console.log(friendInfo(friend)); // ()안은 friend 변수가 가지고 있는 값

cal.showCalendar();
