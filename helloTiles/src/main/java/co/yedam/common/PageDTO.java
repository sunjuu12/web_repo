package co.yedam.common;

public class PageDTO {
	// 댓글 페이지
	int total; /* 전체 건수 */
	int currentPage; /* 현재 페이지 */
	boolean next, prev; /* 이전, 이후 페이지*/
	int startPage, endPage;
	int boardNo;
	
	public PageDTO(int boardNo, int total, int currentPage) {
		int realEnd = (int) Math.ceil(total / 5.0); /* 마지막 페이지*/
		
		this.boardNo = boardNo;
		this.total = total;
		this.currentPage = currentPage;
		
		// 11page 13page 20page
		// 51page 51page(현재 페이지) 52page/ 전체 건수 258건 -> 52page
		this.endPage = (int) Math.ceil(currentPage / 10.0) * 10; /* 계산 상에 의한 endPage */
		this.startPage = this.endPage - 9;
		
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd; /* realEnd보다 작으면 next가 있다 */
	}
	
}
