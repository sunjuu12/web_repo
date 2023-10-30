package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// getter setter ToString 다 자동으로 해줌
@Data
// 모든 매개값을 가지는 생성자 기본 생성자는 없음
@AllArgsConstructor
// 기본 생성자
@NoArgsConstructor
public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
}
