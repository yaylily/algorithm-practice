SELECT o.ANIMAL_ID, o.NAME from ANIMAL_OUTS o
left join ANIMAL_INS i on i.ANIMAL_ID = o.ANIMAL_ID
where i.ANIMAL_ID is NULL




-- 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물
-- 동물의 ID와 이름
-- ID 순으로 조회