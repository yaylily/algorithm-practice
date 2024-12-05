SELECT i.ANIMAL_ID, i.NAME from ANIMAL_INS i
inner join ANIMAL_OUTS o on o.ANIMAL_ID = i.ANIMAL_ID
order by o.DATETIME - i.DATETIME desc
limit 2


-- 입양을 간 동물
-- 보호 기간이 가장 길었던 동물 두 마리
-- 아이디와 이름을 조회
-- 결과는 보호 기간이 긴 순으로 조회