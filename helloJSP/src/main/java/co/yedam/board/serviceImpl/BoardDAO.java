package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.common.DataSource;

public class BoardDAO {
	// 목록, 단건 조회, 등록, 수정, 삭제
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;
	DataSource ds = DataSource.getInstance();
	
	public void close() {
		try {
			if (rs != null)
				rs.close();
			if (psmt != null)
				psmt.close();
			if (conn != null)
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	} // end close()
	
	public List<BoardVO> selectList() {
		String sql = "SELECT * FROM BOARD ORDER BY BOARD_NO";
		conn = ds.getConnection();
		BoardVO vo;
		List<BoardVO> list = new ArrayList<BoardVO>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setTitle(rs.getString("title"));
				vo.setContent(rs.getString("content"));
				vo.setWriter(rs.getString("writer"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				list.add(vo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}
	// 단건 조회
	public BoardVO select(int boardNo) {
		sql = "select * from board where board_no=?";
		conn = ds.getConnection();
		BoardVO vo = null;
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			rs = psmt.executeQuery();
			if (rs.next()) {
				vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setTitle(rs.getString("title"));
				vo.setContent(rs.getString("content"));
				vo.setWriter(rs.getString("writer"));
				vo.setWriteDate(rs.getDate("write_date"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}
	// 등록
	public int insert(BoardVO vo) {
		sql = "insert into board(board_no, title, content, writer, image)"
				+ "values(seq_board.nextval, ?, ?, ?, ?)";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());
			psmt.setString(4, vo.getImage());
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	// 수정
	public int update(BoardVO vo) {
		sql = "update board set title=?, content=?, image=nvl(?, image), last_update=sysdate "
				+ " where board_no=?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			psmt.setInt(4, vo.getBoardNo());
			
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	// 삭제
	public int delete(int boardNo) {
		sql = "DELETE board WHERE board_no = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			
			int r = psmt.executeUpdate();
			return r;
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	// 조회 수 증가
	public int updateCnt(int boardNo) {
		sql = "update board set view_cnt=view_cnt+1 where board_no=?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			
			int r = psmt.executeUpdate();
			return r;
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
		
	} // end updateCnt
	
	// 로그인 (아이디/비밀번호 조회, 조회 값 = boolean)
	public MemberVO getUser(String id, String pw) {
		sql = "select * from member where mid=? and pass=?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs = psmt.executeQuery();
			
			if(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setName(rs.getString("name"));
				vo.setPass(rs.getString("pass"));
				vo.setPhone(rs.getString("phone"));
				vo.setResponsbility(rs.getString("responsbility"));
				return vo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return null;
	} // end getUser
	
	public List<MemberVO> memberList() {
		sql = "select * from member";
		conn = ds.getConnection();
		List<MemberVO> list = new ArrayList<MemberVO>();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setName(rs.getString("name"));
				vo.setPass(rs.getString("pass"));
				vo.setPhone(rs.getString("phone"));
				vo.setResponsbility(rs.getString("responsbility"));
				list.add(vo);
			}
			System.out.println(list);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
	}
}
