package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/studentList.do")
public class StudentListServlet extends HttpServlet {
	// 생명주기 : init(method) -> service(method) -> destroy(method)
	// 서버를 처음 호출 할 때만 생성자와 init 불러오고 새로고침하면 service만 불러옴.
	// 서버 stop시 destroy
	public StudentListServlet() {
		System.out.println("생성자 call.");
	}
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init call.");
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Enumeration<String> enumer = req.getHeaderNames(); // 열거형 타입임
		while(enumer.hasMoreElements()) { //hasMoreElements() 열거형 타입에 반환될 값이 있는지 물어보는 메소드
			String header = enumer.nextElement();
			String val = req.getHeader(header);
			System.out.println(header + " : " + val);
		}
		
		// studentList.do?name=Hong&age=20 이라는 파라매터 값을 넘겼을 때 그 값을 읽어오는 방법 => 결과값은 resp에 넘김
		String name = req.getParameter("name");
		String age = req.getParameter("age");
		System.out.println(name + ", " + age);
		System.out.println("service call.");
		
		// 응답 정보의 컨텐트 타입, 인코딩 처리 지정해주는 method 
		resp.setCharacterEncoding("utf-8"); // DB에서 데이터를 가져오는데 한글이 있을 경우
		resp.setContentType("text/json;charset=utf-8"); // html 만들 때
		
		// 학생 정보를 json 포맷으로 전송하기 위해 데이터 변환(servlet -> json)
		StudentService svc = new StudentServiceImpl();
		List<StudentVO> list = svc.listStudent();
		
		// 객체 -> json 문자열
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		// 데이터를 주고받을 때 strim 사용 PrintWriter는 출력 스트림.
		PrintWriter out = resp.getWriter();
		out.println(json);
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy call.");
	}
}
