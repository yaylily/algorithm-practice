select DISTINCT(ID), EMAIL, FIRST_NAME, LAST_NAME  from DEVELOPERS d
inner join SKILLCODES s on s.CODE & d.SKILL_CODE
where s.NAME = 'Python' || s.NAME = 'C#'
order by ID


-- Python이나 C# 스킬을 가진 개발자의 정보를 조회
--  개발자의 ID, 이메일, 이름, 성을 조회
-- 결과는 ID를 기준으로 오름차순