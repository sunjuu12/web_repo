package co.yedam.student.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

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

@WebServlet("/getStudent.do")
public class GetStudentServlet extends HttpServlet{
	// service: parameter(???)
	// 아이디를 넘겨주면 한 건 조회해주는 기능 : getStudent
	// 조회된 기능을 값을 호출하는 쪽으로 넘겨줘야함
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String id = req.getParameter("sid");
		System.out.println("test: "+id);
		
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = svc.getStudent(id);
		
		
		Map<String, Object> map = new HashMap<>();
		
		if (svc.getStudent(id) != null) {
			map.put("retCode", "OK");
			map.put("vo", vo);
		} else {
			map.put("retCode", "NG");
			map.put("vo", vo);
		}
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map);
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/json;charset=utf-8");
		resp.getWriter().print(json);
		
	}
}
