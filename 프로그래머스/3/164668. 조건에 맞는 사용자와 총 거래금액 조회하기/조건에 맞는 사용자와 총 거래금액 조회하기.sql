SELECT u.USER_ID, u.NICKNAME, sum(b.PRICE) TOTAL_SALES from USED_GOODS_BOARD b
inner join USED_GOODS_USER u on u.USER_ID = b.WRITER_ID
where b.STATUS = 'DONE'
group by u.USER_ID
having sum(b.PRICE) >= 700000
order by TOTAL_SALES asc


-- 완료된 중고 거래
-- 총금액이 70만 원 이상
-- 회원 ID, 닉네임, 총거래금액을 조회
-- 결과는 총거래금액을 기준으로 오름차순 정렬