package co.yedam.board.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.admin.service.MemberVO;
import co.yedam.board.mapper.BoardMapper;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSourceMybatis;

public class BoardServiceImpl implements BoardService{
	
	SqlSession sqlSession  = DataSourceMybatis.getInstance().openSession(true);
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class); // 실행되는 시점에 실제 인스턴                                                            
	// SqlSessionFactory factory = factory.openSession(true); // 자동커밋
	
	@Override
	public List<BoardVO> boardList() {
		//return dao.selectList();
		return mapper.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) { // 건별 조회
		// dao.updateCnt(boardNo);
		// return dao.select(boardNo);
		//mapper.updateCnt(boardNo);
		return mapper.select(boardNo);
	}

	@Override
	public boolean addBoard(BoardVO vo) { // 등록
		// return dao.insert(vo) == 1;
		return mapper.insert(vo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO vo) { // 수정
		// return dao.update(vo) == 1;
		return mapper.update(vo) == 1;
	}

	@Override
	public boolean removeBoard(int boardNo) { // 삭제
		// return dao.delete(boardNo) == 1;
		return mapper.delete(boardNo) == 1;
	}

	@Override
	public MemberVO loginCheck(String id, String pw) {
		// return dao.getUser(id, pw); // 로그인
		return mapper.getUser(id, pw); // 로그인
	}

	@Override
	public List<MemberVO> memberlist() {
		// return dao.memberList();
		return mapper.memberList();
	}

	
}
