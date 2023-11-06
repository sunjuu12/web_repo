package co.yedam.common;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LoginControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// 아이디와 비밀번호 받아와서 일치 시 로그인 진행, 불일치시 다시 로그인 화면 구현
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		
		// session : 서버-클라이언트 사이에 만들어지는 각각의 고유한 것
		
		BoardService svc = new BoardServiceImpl();
		List<MemberVO> vo = svc.memberlist();
		if(vo != null) {
			HttpSession session = req.getSession();
			session.setAttribute("logId", id);
			
			try {
				reps.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				reps.sendRedirect("loginForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
