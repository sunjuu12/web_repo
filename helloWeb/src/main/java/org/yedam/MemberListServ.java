package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberVO;
import org.yedam.service.impl.MemberServiceImpl;

/**
 * Servlet implementation class MemberListServ
 */
@WebServlet("/MemberListServ")
public class MemberListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		System.out.println(list);
	
		// 출력스트림
		response.setContentType("text/xml;charset=utf-8");
		PrintWriter out = response.getWriter(); //웹 브라우져 가르킴
		
		String str = "<dataset>";
		// 리스트에 들어있는 개수만큼 루핑
		for(MemberVO vo : list) {
			str += "<record>";
			str += "<mid>" + vo.getMid() + "</mid>";
			str += "<pass>" + vo.getPass() + "</pass>";
			str += "<name>" + vo.getName() + "</name>";
			str += "<phone>" + vo.getPhone() + "</phone>";
			str += "</record>";
		}
		str += "</dataset>";
		out.print(str);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
