package co.yedam.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// 로그인 화면
		String path = "WEB-INF/main/loginForm.jsp";
		
		try {
			req.getRequestDispatcher(path).forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
