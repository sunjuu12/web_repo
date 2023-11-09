package co.yedam.board.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// TODO Auto-generated method stub
		String path="board/boardList.tiles";
		
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList();
		
		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		} 

	}

}