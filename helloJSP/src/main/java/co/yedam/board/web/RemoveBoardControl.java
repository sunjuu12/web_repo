package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// TODO Auto-generated method stub
		BoardVO vo = new BoardVO();
		
		String bno = req.getParameter("bno");
		
		vo.setBoardNo(Integer.parseInt(bno));

		BoardService svc = new BoardServiceImpl();

		if (svc.removeBoard(Integer.parseInt(bno))) {
			try {
				reps.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				reps.sendRedirect("removeForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
