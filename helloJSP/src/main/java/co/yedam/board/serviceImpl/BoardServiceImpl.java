package co.yedam.board.serviceImpl;

import java.util.List;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;

public class BoardServiceImpl implements BoardService{
	BoardDAO dao = new BoardDAO();
	
	@Override
	public List<BoardVO> boardList() {
		return dao.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) { // 건별 조회
		dao.updateCnt(boardNo);
		return dao.select(boardNo);
	}

	@Override
	public boolean addBoard(BoardVO vo) { // 등록
		return dao.insert(vo) == 1;
	}

	@Override
	public boolean editBoard(BoardVO vo) { // 수정
		return dao.update(vo) == 1;
	}

	@Override
	public int removeBoard(int boardNo) { // 삭제
		return dao.delete(boardNo);
	}
	
}
