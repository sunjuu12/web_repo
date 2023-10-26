/**
 * friend.js
 */

const friend = {
	 name: "홍길동",
	 phone: "010-1111-2222",
	 address: "대구 중구 100번지",
	 showInfo: function () {
		 return `이름은 ${this.name}, 연락처는 ${this.phone}입니다.`;
	 }
}

function friendInfo(friend) {
	return `${friend.name}, ${friend.phone}, ${friend.address}`;
}

// 노출시키고자 하는 것 export
// 자바스크립트는 다 public 타입이기 때문
export {friend, friendInfo};

