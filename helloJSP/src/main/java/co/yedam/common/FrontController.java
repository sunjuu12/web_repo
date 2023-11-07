package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifiyFormControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;
import co.yedam.reply.web.AddReplyControl;
import co.yedam.reply.web.ReplyListControl;

// url : *.do
public class FrontController extends HttpServlet {
	// init(서버 실행 시 한 번) -> service
	Map<String, Command> map = new HashMap<>();
	
	@Override
	public void init() throws ServletException { // 서버가 실행될 때 한 번만 실행
		// 메인 페이지
		map.put("/main.do", new MainConrol());
		// 로그인 화면
		map.put("/loginForm.do", new LoginFormControl());
		// 로그인 처리
		map.put("/login.do", new LoginControl());
		// 로그아웃
		map.put("/logoutForm.do", new LogoutControl());
		
		map.put("/memberList.do", new MemberListControl());
		
		// 상세 화명
		//map.put("/FirstServlet.do", new FirstControl()); // map.put(a, b) a 요청이 들어오면 b 기능을 실행하겠다
		//map.put("/second.do", new SecondControl());
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		
		// 등록 화면
		map.put("/boardForm.do", new BoardFormControl());
		// 등록 처리
		map.put("/addBoard.do", new AddBoardControl());
		
		// 수정 화면
		map.put("/modifyForm.do", new ModifiyFormControl());
		map.put("/modifyBoard.do", new ModifyBoardControl());
		
		// 삭제 화면
		map.put("/removeForm.do", new RemoveFormControl());
		map.put("/removeBoard.do", new RemoveBoardControl());
		
		// 댓글목록
		map.put("/replyList.do", new ReplyListControl());
		map.put("/addReply.do", new AddReplyControl());
	}
	// 요청을 받았을 때 어떤 형식으로 반환할 것인지 지정
	
	
	// .do 를 요청했을 때 실행시키는 곳
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 요청 정보의 한글 인코딩 방식
		req.setCharacterEncoding("UTF-8");
		//System.out.println("FrontController");
		String uri = req.getRequestURI(); // http://localhost:8080/helloJSP/??.do // uri = helloJSP/??.do 
		String context = req.getServletContext().getContextPath(); // helloJSP // 프로젝트 이름 가지고 오는 메소드 => map과 boardlistcontrol 연결 시켜주기 위함
		String page = uri.substring(context.length());
		System.out.println(page);
		
		Command controller = map.get(page);
		controller.execute(req, resp);
		
		/*
		 * if (page.equals("/second.do")) {
		 * 
		 * } else if (page.equals("/FirstServlet.do")) {
		 * 
		 * }
		 */
	}
}
