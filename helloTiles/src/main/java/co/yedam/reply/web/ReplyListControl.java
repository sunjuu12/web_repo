package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.common.PageDTO;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		page = page == null ? "1" : page; // page가 null이면 1페이지를 반환
		
		ReplyService svc = new ReplyServiceImpl();
		
		// 페이징 계산
		PageDTO dto = new PageDTO(Integer.parseInt(bno),
								  svc.getTotalCnt(Integer.parseInt(bno)),
								  Integer.parseInt(page));
		
		// 댓글 목록
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno), Integer.parseInt(page));
		
		// list, dto 넘기려면 map 타입이 적절
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("dto", dto);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String json = gson.toJson(map); /* map을 json 데이터로 넘겨줌 */
		
		reps.setContentType("text/json;charset=utf-8");
		
		try {
			reps.getWriter().print(json);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
