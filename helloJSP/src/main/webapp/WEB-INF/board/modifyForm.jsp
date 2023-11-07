<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp" %>
<%@include file="../layout/header.jsp" %>

<%
	BoardVO vo = (BoardVO) request.getAttribute("vo");
%>
	<h3>게시글 수정화면</h3>
	<form action="modifyBoard.do" method="post"> <!-- method 따로 정의 안 하면 get 방식임 -->
	<input type="hidden" name="bno" value="<%=vo.getBoardNo() %>">
		<table class="table">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="<%=vo.getTitle() %>"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input class="form-control" type="text" name="writer" value="<%=vo.getWriter() %>"></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="31" rows="6" class="form-control" name="content"><%=vo.getContent() %></textarea></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><img src="images/<%=vo.getImage() %>" width="80px"></td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input class="btn btn-primary" type="submit" value="수정">
					<input class="btn btn-warning" type="reset" value="초기화">
				</td>
			</tr>
		</table>
	</form>
	
<%@include file="../layout/footer.jsp" %>