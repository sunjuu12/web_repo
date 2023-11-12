package co.yedam.product.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class GetProductControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		String path = "product/productInfo.tiles";
		
		String pid = req.getParameter("pid");
		
		ProductService svc = new ProductServiceImpl();
		ProductVO vo = svc.getProduct(pid);
		
		System.out.println(vo);
		
		req.setAttribute("vo", vo);

		List<ProductVO> list = svc.productlist();

		System.out.println(list);

		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
