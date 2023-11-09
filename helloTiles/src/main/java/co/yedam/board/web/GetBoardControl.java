package co.yedam.board.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class GetBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		String bno = req.getParameter("bno");
		BoardService svc = new BoardServiceImpl();
		// 문자열을 숫자 타입으로 변환하여 getBoard 메소드 안에 넣어주는 구문
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		
		// jsp로 가져오는 것
		req.setAttribute("bno", vo);
		
		// 요청 재지정 ""안은 이동할 url
		try {
			req.getRequestDispatcher("WEB-INF/board/getBoard.jsp").forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
