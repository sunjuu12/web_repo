package co.yedam.reply.service;

import java.util.List;

//DAO mapper: select, insert, update, delete
public interface ReplyService {
	public List<ReplyVO> replyList(int boardNo); // 목록
	public ReplyVO selectReply(int replyNo); // 단건 조회
	public boolean addReply(ReplyVO vo); // 등록
	public boolean updateReply(ReplyVO vo); // 수정
	public boolean deleteReply(int replyNo); // 삭제
	
	
}
