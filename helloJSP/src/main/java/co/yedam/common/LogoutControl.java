package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;

public class LogoutControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// TODO Auto-generated method stub
		req.getSession().invalidate(); // invalidate : 세션 정보를 삭제하는 메소드임
		// 세션 정보 삭제 후 main.do로 이동
		try {
			reps.sendRedirect("main.do");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
