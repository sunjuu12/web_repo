package co.yedam.product.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class GetProductControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		String pcode = req.getParameter("pcode");
		ProductService svc = new ProductServiceImpl();
		
		ProductVO vo = svc.getProduct(Integer.parseInt(pcode));
		
		req.setAttribute("pcode", vo);
		
		try {
			req.getRequestDispatcher("WEB-INF/product/productInfo.jsp").forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
