/**
 * service.js 11.03
 */
export default {
	// async => 비동기 방식을 동기 방식으로 처리하겠다
	// 목록 처리
	async studentList(successCallback, errorCallback) {
		let req = await fetch('../studentList.do');
		let json = await req.json();
		try {
			successCallback(json);
		} catch (err) {
			errorCallback(err);
		}
	},
	// 단건 조회
	async getStudent(id, successCallback, errorCallback) {
		let req = await fetch('../getStudent.do?sid='+ id);
		let json = await req.json();
		try {
			successCallback(json);
		}catch (err) {
			errorCallback(err);
		}
	},
	// 등록
	async addStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../addStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		}catch (err) {
			errorCallback(err);
		}
	},
	// 수정
	async editStudent(optObj, successCallback, errorCallback) {
		let req = await fetch('../editStudent.do', optObj);
		let json = await req.json();
		try {
			successCallback(json);
		}catch (err) {
			errorCallback(err);
		}
	},
	// 삭제
	async removeStudent(id, successCallback, errorCallback) {
		let req = await fetch('../delStudent.do?sid='+ id);
		let json = await req.json();
		try {
			successCallback(json);
		}catch (err) {
			errorCallback(err);
		}
	}
}