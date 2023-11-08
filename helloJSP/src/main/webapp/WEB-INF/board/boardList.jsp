<%@page import="co.yedam.board.service.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>

	<hr>
	<h3>게시판 목록</h3>
	<%-- <%
		// List<BoardVO> 값을 참조하고 있다. // 반환되는 타입 object 이기에 형변환을 해줘야함. 
		List<BoardVO> list = (List<BoardVO>) request.getAttribute("list");  // list는 setAttribute 해논 곳
	%> --%>
	<table class="table">
		<thead>
			<tr>
				<th>글번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>작성일자</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${list }" var="vo">
				<tr>
					<td>${vo.boardNo }</td>
					<td><a href="getBoard.do?bno=${vo.boardNo }">${vo.title }</a></td>
					<td>${vo.writer }</td>
					<td><fmt:formatDate value="${vo.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fmt:formatDate></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<p><a href="boardForm.do">등록 화면</a></p>
<jsp:include page="../layout/footer.jsp"></jsp:include>
