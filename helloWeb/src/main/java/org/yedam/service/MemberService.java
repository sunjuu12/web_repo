package org.yedam.service;

import java.util.List;

public interface MemberService {
	// 회원 목록: memberList()
	public List<MemberVO> memberList();
	// '서블릿?patam=val&param=val' 구현하기 위해서
	public boolean addMember(MemberVO vo);
	// 선택값을 기준으로 수정하기 위해서
	public boolean modifyMember(MemberVO vo);
}
