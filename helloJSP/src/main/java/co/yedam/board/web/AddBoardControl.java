package co.yedam.board.web;

import java.io.Console;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class AddBoardControl implements Command {
	BoardVO vo = new BoardVO();

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// 제목, 내용, 작성자
		if (req.getMethod().equals("get")) {
			String title = req.getParameter("title");
			String writer = req.getParameter("writer");
			String content = req.getParameter("content");

			vo.setTitle(title);
			vo.setContent(content);
			vo.setWriter(writer);
			
		} else if (req.getMethod().equals("POST")) {
			String saveDir = req.getServletContext().getRealPath("images");
			int size = 5 * 1024 * 1024;
			// MultipartRequest mr; // 멀티파트 요청시 파일이 업로드 됨
			try {
				MultipartRequest mr = new MultipartRequest(req, // 요청정보
						saveDir, // 파일이 지정되어야할 경로)
						size, // 최대 업로드 크기
						"UTF-8", // encoding 타입
						new DefaultFileRenamePolicy()); // 리네임 정책
				String title = mr.getParameter("title");
				String writer = mr.getParameter("writer");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");

				vo.setTitle(title);
				vo.setWriter(writer);
				vo.setImage(img);
				vo.setContent(content);
				
				System.out.println(vo);

			} catch (IOException e) {
				e.printStackTrace();
			}

		} // end of if
		
		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) {
			// 목록으로 이동
			try {
				reps.sendRedirect("boardList.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			try {
				reps.sendRedirect("boardForm.do");
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

	} // end of execute

} // end of class
