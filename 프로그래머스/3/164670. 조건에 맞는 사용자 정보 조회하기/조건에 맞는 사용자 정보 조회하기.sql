SELECT u.USER_ID, u.NICKNAME, concat(u.CITY, ' ',u.STREET_ADDRESS1, ' ',u.STREET_ADDRESS2) 전체주소, concat(substr(u.TLNO, 1, 3), '-', substr(u.TLNO, 4, 4), '-', substr(u.TLNO, 8, 4)) 전화번호
from USED_GOODS_USER u
join (select WRITER_ID from USED_GOODS_BOARD
     group by WRITER_ID
     having count(*) >= 3) b on b.WRITER_ID = u.USER_ID
order by u.USER_ID desc



-- 중고 거래 게시물을 3건 이상 등록한 사용자
-- 사용자 ID, 닉네임, 전체주소, 전화번호를 조회
-- 전체 주소는 시, 도로명 주소, 상세 주소가 함께 출력
-- 전화번호의 경우 xxx-xxxx-xxxx 같은 형태로 하이픈 문자열(-)을 삽입하여 출력
-- 회원 ID를 기준으로 내림차순