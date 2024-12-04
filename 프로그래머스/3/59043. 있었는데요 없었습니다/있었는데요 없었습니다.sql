SELECT i.ANIMAL_ID, i.NAME from ANIMAL_INS i
inner join ANIMAL_OUTS o on o.ANIMAL_ID = i.ANIMAL_ID
where o.DATETIME - i.DATETIME < 0
order by i.DATETIME asc


-- 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회
-- 결과는 보호 시작일이 빠른 순으로 조회