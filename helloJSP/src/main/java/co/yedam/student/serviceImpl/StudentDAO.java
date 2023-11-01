package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class StudentDAO {
	// 커넥션 객체
	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	void close() {
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
	}
	
	//
	public int insert(StudentVO vo) {
		String sql = "INSERT INTO STUDENT(STUDENT_ID, STUDENT_NAME, "
				+ "STUDENT_PASSWORD, STUDENT_DEPT, STUDENT_BIRTHDAY) " 
				+ "VALUES (?, ?, ?, ?, ?)";
		conn = ds.getConnection();    
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); // date 타입을 문자열로 변환
		// Date -> String : sdf.format()
		// String -> Date : sdf.parse()
		System.out.println(sdf.format(vo.getStudentBirthday()));
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,  vo.getStudentId());
			psmt.setString(2, vo.getStudentName());
			psmt.setString(3, vo.getStudentPassword());
			psmt.setString(4, vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			int r = psmt.executeUpdate();
			return r;
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0; // 처리된 건수가 없음 : 에러
	}
	// 수정: update
	public int update(StudentVO vo) {
		String sql = "UPDATE STUDENT SET STUDENT_NAME = ?, STUDENT_PASSWORD = ?, "
				+ " STUDENT_DEPT = ?, STUDENT_BIRTHDAY = ? WHERE STUDENT_ID = ?";
				
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(5, vo.getStudentId());
			psmt.setString(1, vo.getStudentName());
			psmt.setString(2, vo.getStudentPassword());
			psmt.setString(3, vo.getStudentDept());
			psmt.setString(4, sdf.format(vo.getStudentBirthday()));
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	// 삭제: delete
	public int delete(String sid) {
		String sql = "DELETE STUDENT WHERE STUDENT_ID = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	// 목록: list
	public List<StudentVO> listStudent() {
		 List<StudentVO> list = new ArrayList<StudentVO>();
		 String sql = "SELECT * FROM STUDENT ";
		 conn = ds.getConnection();
		 try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				StudentVO vo = new StudentVO();
				vo.setStudentId(rs.getString("student_id"));
				vo.setStudentName(rs.getString("student_name"));
				vo.setStudentPassword(rs.getString("student_password"));
				vo.setStudentDept(rs.getString("student_dept"));
				vo.setStudentBirthday(rs.getDate("student_birthday"));
				list.add(vo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;
		 
	}
	// 조회: select
	public StudentVO select(String sid) {
		String sql = "SELECT * FROM STUDENT WHERE STUDENT_ID = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			int r = psmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return null;
	}
}
