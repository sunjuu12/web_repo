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

// url : *.do
public class FrontController extends HttpServlet {
	// init(서버 실행 시 한 번) -> service
	Map<String, Command> map = new HashMap<>();
	
	@Override
	public void init() throws ServletException { // 서버가 실행될 때 한 번만 실행
		//map.put("/FirstServlet.do", new FirstControl()); // map.put(a, b) a 요청이 들어오면 b 기능을 실행하겠다
		//map.put("/second.do", new SecondControl());
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
		// 등록 화면
		map.put("/boardForm.do", new BoardFormControl());
		// 등록 처리
		map.put("/addBoard.do", new AddBoardControl());
	}
	// 요청을 받았을 때 어떤 형식으로 반환할 것인지 지정
	
	
	// .do 를 요청했을 때 실행시키는 곳
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
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
