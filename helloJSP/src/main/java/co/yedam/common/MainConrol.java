package co.yedam.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MainConrol implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		
		try {
			req.getRequestDispatcher("WEB-INF/main/main.jsp").forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
