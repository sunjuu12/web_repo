package co.yedam.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;

public interface BoardMapper {
	public List<BoardVO> selectList();
	public BoardVO select(int boardNo);
	public int updateCnt(int boardNo);
	public int insert(BoardVO VO);
	public int update(BoardVO VO);
	public int delete(int boardNo);
	
	// 말바티스에서 매개값을 두 개 줄 수 있는 방법은 없음 => @Param으로 값을 넘겨줘야함
	// 로그인
	public MemberVO getUser(@Param("id")String id, @Param("pw") String pw);
	public List<MemberVO> memberList();
}
