package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Command;

public class BoardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		HttpSession session = req.getSession();
		if (session.getAttribute("logId") == null) { // guest일 경우 게시글 등록 버튼 선택시 로그인 페이지로 이동
			try {
				reps.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else { // 로그인 아이디가 일치하면 게시글 등록
			try {
				req.getRequestDispatcher("WEB-INF/board/boardForm.jsp").forward(req, reps);
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		} // end if

	} // end execute

}
