package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command {
	BoardVO vo = new BoardVO();
	
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// 매개 파라메터 값이 ModifyBoardControl로 넘어옴 -> 데이터 수정 -> 목록 이동
			
			String bno = req.getParameter("bno");
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");
			
			System.out.println(vo);
			vo.setTitle(title);
			vo.setWriter(writer);
			vo.setContent(content);
			vo.setBoardNo(Integer.parseInt(bno));
			
		BoardService svc = new BoardServiceImpl();
		
		if (svc.editBoard(vo)) {
			try {
				reps.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				reps.sendRedirect("modifyForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
