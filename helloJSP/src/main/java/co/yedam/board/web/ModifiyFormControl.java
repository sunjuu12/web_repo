package co.yedam.board.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifiyFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// 수정화면 오픈
		String bno = req.getParameter("bno");
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno));
		
		System.out.println(bno);
		req.setAttribute("vo", vo); // 요청 정보에 담아서
		
		try {
			req.getRequestDispatcher("WEB-INF/board/modifyForm.jsp").forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
