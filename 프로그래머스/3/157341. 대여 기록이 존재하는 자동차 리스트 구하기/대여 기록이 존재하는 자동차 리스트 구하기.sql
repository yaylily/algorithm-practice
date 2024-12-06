SELECT distinct(c.CAR_ID) from CAR_RENTAL_COMPANY_CAR c
inner join CAR_RENTAL_COMPANY_RENTAL_HISTORY h on c.CAR_ID = h.CAR_ID
where c.CAR_TYPE = '세단' and month(h.START_DATE) = 10
order by c.CAR_ID desc


-- 자동차 종류가 '세단'인 자동차들 중
-- 10월에 대여를 시작한 기록이 있는
-- 자동차 ID 리스트를 출력
-- 자동차 ID 리스트는 중복이 없어야 하며, 
-- 자동차 ID를 기준으로 내림차순 정렬