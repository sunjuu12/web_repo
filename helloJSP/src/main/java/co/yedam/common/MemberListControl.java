package co.yedam.common;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MemberListControl implements Command {
	MemberVO vo = new MemberVO();
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
			
		BoardService svc = new BoardServiceImpl();
		List<MemberVO> members = svc.memberlist();
		
		req.setAttribute("memberList", members);
		System.out.println(members);
		
		//req.getRequestDispatcher("WEB-INF/board/memberList.jsp"); //.forward(req, reps);
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/memberList.jsp"); //.forward(req, reps);
		try {
			rd.forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
