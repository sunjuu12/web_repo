<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
	#list span {
		margin: 4px;
	}

	.pagination {
		display: inline-block;
	}

	.pagination a {
		color: black;
		float: left;
		padding: 8px 16px;
		text-decoration: none;
	}

	.pagination a.active {
		background-color: #4CAF50;
		color: white;
	}

	.pagination a:hover:not(.active) {
		background-color: #ddd;
	}
</style>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<hr>
<h3>상세화면(조회화면)</h3>
<form action="modifyForm.do" name="myFrm">
	<input type="hidden" name="bno" value="${bno.boardNo }">
	<table class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo">${bno.boardNo }</td>
			<th>작성 일시</th>
			<td><fmt:formatDate value="${bno.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
		</tr>
		<tr>
			<th>글제목</th>
			<td colspan="3">${bno.title }</td>
		</tr>
		<tr>
			<td colspan="4">
				<textarea class="form-control" rows="5" cols="40">${bno.content }</textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<td colspan="3">
				<c:if test="${!empty bno.image }">
					<img width="80px" src="images/${bno.image }">
				</c:if>
			</td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${bno.writer }</td>
			<th>조회수</th>
			<td>${bno.viewCnt }</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
				<c:choose>
					<c:when test="${!empty logId && logId == bno.writer }">
						<input class="btn btn-primary" type="submit" value="수정">
						<input class="btn btn-warning" type="button" value="삭제">
					</c:when>
					<c:otherwise>
						<input class="btn btn-primary" disabled type="submit" value="수정">
						<input class="btn btn-warning" disabled type="button" value="삭제">
					</c:otherwise>
				</c:choose>
			</td>
		</tr>
	</table>
</form>
<h3>댓글 등록</h3>
<table class="table">
	<tr>
		<th>댓글 내용</th>
		<td><input type="text" class="form-control" id="content"></td>
		<td><button id="addReply" class="btn btn-primary">등록</button></td>
	</tr>
</table>
<h3>댓글 목록</h3>
<ul id="list">
	<li style="display: none" id="template">
		<span>00</span>
		<b>첫번째 댓글</b>
		<span>user01</span>
		<span>2023-10-12</span>
		<button>삭제</button>
	</li>
</ul>

<div class="pagination"></div>
<script>
	document.querySelector('input[type=button]').addEventListener('click', function (e) {
		document.forms.myFrm.action = 'removeForm.do';
		document.forms.myFrm.submit();
	});

	// 댓글 목록
	let bno = "${bno.boardNo }";
	let writer = "${logId }";
	console.log(bno);
	bno = document.querySelector(".boardNo").innerHTML;
	let page = 1;
	
	function showList(pg = 1) { // page값(매개값)이 없으면 초기값 1
		document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li => li.remove());
		fetch('replyList.do?bno=' + bno + '&page=' + pg)
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				if (pg < 0) {
					page = Math.ceil(result.dto.total / 5);
					// page = result.dto.endPage;
					showList(page);
					return;
				} 
				result.list.forEach(reply => {
					let li = makeRow(reply);
					// ul > li 생성
					document.querySelector('#list').append(li);
				})
				// page 생성
				console.log(result.dto);
				makePaging(result.dto);
			})
			.catch(err => console.log(err));
	}
	showList();

	// 페이지 링크 생성
	function makePaging(dto = {}) {
		document.querySelector('.pagination').innerHTML = '';
		if (dto.prev) {
			/* 이전 페이지가 있으면 << 링크 달아주기 */
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.startPage - 1);
			aTag.innerHTML = "&laquo;"
			document.querySelector('.pagination').append(aTag);
		}
		
		for (let i = dto.startPage; i <= dto.endPage; i++) {
			let aTag = document.createElement('a');
			aTag.setAttribute('href', i);
			aTag.innerHTML = i;
			// active 녹색
			if (i == page) {
				aTag.className = 'active'; // class는 setAttribute 대신 className이라는 속성 사용 (class 속성 지정)
			}
			document.querySelector('.pagination').append(aTag);
		}
		
		if (dto.next) {
			/* 다음 페이지가 있으면 >> 링크 달아주기 */
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.endPage + 1);
			aTag.innerHTML = "&raquo;"
			document.querySelector('.pagination').append(aTag);
		}
		// aTage에 클릭이벤트 등록
		document.querySelectorAll('.pagination a').forEach(elem => {
			elem.addEventListener('click', function(e) {
				e.preventDefault(); // 기본 기능(form, a 링크 기능)을 차단 ajax는 페이지에 머물면서 기능을 수행해야하기에
				page = elem.getAttribute('href');
				showList(page);
			})
		})
	} // end of makePaging

	// 댓글 등록 버튼 이벤트
	document.querySelector('#addReply').addEventListener('click', function (e) {
		let reply = document.querySelector('#content').value;
		console.log(writer);
		if (!bno || writer == 'null' || !reply) {
			alert("값을 확인하세요.");
			return;
		}

		// ajax 호출 bno, writer, reply => servlet으로 전달
		fetch('addReply.do', {
				method: 'post',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
			})
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					// document.querySelector('#list').append(makeRow(result.vo)); //  댓글 등록시 화면에 표시
					showList(-1);
				} else {
					alert('Error.');
				}
			})
	})


	function makeRow(reply) {

		function deleteCallback(e) {
			console.log(e.target.parentElement); // 이벤트를 받는 대상
			if (writer != reply.replyer) {
				alert('권한이 없습니다.');
				return;
			}
			// 삭제
			fetch('removeReply.do?rno=' + reply.replyNo)
				.then(resolve => resolve.json())
				.then(result => {
					if (result.retCode == 'OK') {
						alert('Success!!')
						e.target.parentElement.remove();
						if (page.innerHTML == null) {
							showList(-1);
						}
					} else {
						alert('Error!')
					}
				})
				.catch(err => console.log(err));
		}

		let temp = document.querySelector('#template').cloneNode(true);
		temp.style.display = 'block';
		console.log(temp);
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
		temp.querySelector('button').addEventListener('click', deleteCallback);
		return temp;
	}
</script>