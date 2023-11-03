package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class firstServlet
 */
// @WebServlet("/FirstServlet.do")
public class FirstServlet extends HttpServlet {
	// Servlet 실행 순서 : init -> service -> destroy
	// service가 없으면 doGet(), doPost() 사용 // 있으면 service 안에 doGet(), doPost() 정의
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FirstServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	System.out.println("service 실행");
    	doGet(req,resp);
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for (int i = 1; i < 5; i++) {
			// 출력 화면에 보이게 만들어줌 / 사용자 화면 출력 스트림 : getWriter() / print() 메소드를 이용하여 출력할 구문 입력
			response.getWriter().print("<p>"+i+"번째 이름은 "+name+", 나이는 "+age+"세 입니다.</p>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
