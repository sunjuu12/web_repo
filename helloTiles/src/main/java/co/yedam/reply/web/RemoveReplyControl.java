package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.serviceImpl.ReplyServiceImpl;

public class RemoveReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse reps) {
		// TODO Auto-generated method stub
		String rno = req.getParameter("rno");
		
		Map<String, String> map = new HashMap<>();
		
		ReplyService svc = new ReplyServiceImpl();
		if (svc.deleteReply(Integer.parseInt(rno))) {
			map.put("retCode", "OK");
		} else {
			map.put("retCode", "NG");
		}
		
		// map 데이터를 json으로 변환하는 것
		Gson gson = new GsonBuilder().create();
		try {
			reps.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
