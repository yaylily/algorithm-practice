SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
from ANIMAL_INS
where NAME in ("Lucy", "Ella", "Pickle", "Rogan", "Sabrina", "Mitty")
order by ANIMAL_ID



-- 이름이 Lucy, Ella, Pickle, Rogan, Sabrina, Mitty인 동물
-- 아이디와 이름, 성별 및 중성화 여부를 조회