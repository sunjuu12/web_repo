<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<style>
		#list span {
			margin: 4px;
		}
	</style>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>

	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	<hr>
	<h3>상세화면(조회화면)</h3>
	<form action="modifyForm.do" name="myFrm">
		<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
		<table class="table">
			<tr>
				<th>글번호</th>
				<td class="boardNo"><%=vo.getBoardNo()%></td>
				<th>작성 일시</th>
				<td><%=vo.getWriteDate()%></td>
			</tr>
			<tr>
				<th>글제목</th>
				<td colspan="3"><%=vo.getTitle()%></td>
			</tr>
			<tr>
				<td colspan="4">
				<textarea class="form-control" rows="5" cols="40"><%=vo.getContent()%></textarea></td>
			</tr>
			<tr>
				<th>이미지</th>
				<td colspan="3">
				<% if (vo.getImage() != null) { %>
					<img width="80px" src="images/<%=vo.getImage()%>"></td>
				<% } %>
			</tr>
			<tr>
				<th>작성자</th>
				<td><%=vo.getWriter()%></td>
				<th>조회수</th>
				<td><%=vo.getViewCnt()%></td>
			</tr>
			<tr>
				<td colspan="4" align="center">
				<% if (logId != null && logId.equals(vo.getWriter())) { %>
					<input class="btn btn-primary" type="submit" value="수정">
					<input class="btn btn-warning" type="button" value="삭제">
				<% } else { %>
					<input class="btn btn-primary" disabled type="submit" value="수정">
					<input class="btn btn-warning" disabled type="button" value="삭제">
				<% } %>
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
			<button id="delReply">삭제</button>
		</li>
	</ul>
	<script>
		document.querySelector('input[type=button]').addEventListener('click', function(e) {
			document.forms.myFrm.action = 'removeForm.do';
			document.forms.myFrm.submit();
		});
		
		// 댓글 목록
		let bno = "<%=vo.getBoardNo() %>"; 
		let writer = "<%=logId %>";
		console.log(bno);
		bno = document.querySelector(".boardNo").innerHTML;
		fetch('replyList.do?bno='+bno)
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			result.forEach(reply => {
				let li = makeRow(reply);
				// ul > li 생성
				document.querySelector('#list').append(li);
			})
		})
		.catch(err => ocnsole.log(err));
		
		// 댓글 등록 버튼 이벤트
		document.querySelector('#addReply').addEventListener('click', function(e) {
			let reply = document.querySelector('#content').value;
			console.log(writer);
			if (!bno || writer=='null' || !reply) {
				alert("값을 확인하세요.");
				return;
			}
			
			// ajax 호출 bno, writer, reply => servlet으로 전달
			fetch('addReply.do', {
				method: 'post',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				body: 'bno='+bno+'&reply='+reply+'&replyer='+writer
			})
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == 'OK') {
					document.querySelector('#list').append(makeRow(result.vo));
				} else {
					alert('Error.');
				}
			})
		})
		
		
		function makeRow(reply) {
			let temp = document.querySelector('#template').cloneNode(true);
			temp.style.display = 'block';
			console.log(temp);
			temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo;
			temp.querySelector('b').innerHTML = reply.reply;
			temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
			temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
			return temp;
		}
	</script>
	
<%@include file="../layout/footer.jsp" %>