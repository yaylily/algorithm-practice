select MEMBER_ID, MEMBER_NAME, GENDER, date_format(DATE_OF_BIRTH, '%Y-%m-%d') DATE_OF_BIRTH from MEMBER_PROFILE
where month(DATE_OF_BIRTH) = 3 and GENDER = 'W' and TLNO is not Null
order by MEMBER_ID asc


-- 생일 3월 여성의 Id, 이름, 성별, 생년월일
-- 전화번호 NULL 제외
-- 회원 ID 기준 오름차순 정렬