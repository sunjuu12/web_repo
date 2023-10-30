package org.yedam; //10.30

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.impl.MemberServiceImpl;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
@WebServlet("/AddMemberServ.html")
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// ?mid=M009&pass=9999&name=Kim&phone=010-9999-9999 // 문자열임 key = value & key = value
		// (mid, pass, name, phone) {mid ...}
		// 웹페이지에 값을 넘기는 방식 ** 중요 **
		String mid = request.getParameter("mid");
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		// 멤버 인스턴스 선언
		MemberVO vo = new MemberVO(mid, pass, name, phone);
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		
		Gson gson = new GsonBuilder().create(); //gson 파일 쓰는 법
		
		// Map return타입을 보여주도록 
		Map<String, Object> map = new HashMap<>();
		
		
		// 반환값은 boolean 형태임
		if (svc.addMember(vo)) {
			// {"retCode": "OK"}
			//out.print("{\"retCode\": \"OK\"}"); => gson 사용으로 간단하게 사용 가능
			map.put("retCode", "OK");
			map.put("vo", vo);
		} else {
			// {"retCode": "NG"}
			//out.print("{\"retCode\": \"NG\"}");
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		}
		String json = gson.toJson(map); // 알아서 문자열로 바꿔줌
		out.print(json);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
