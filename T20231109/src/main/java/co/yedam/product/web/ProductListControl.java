package co.yedam.product.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class ProductListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// TODO Auto-generated method stub
		String path="product/productList.tiles";
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.productList();
		
		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, reps);
		} catch (Exception e) {
			e.printStackTrace();
		} 

	}

}