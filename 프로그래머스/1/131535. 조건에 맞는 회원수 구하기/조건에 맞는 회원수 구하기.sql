-- 코드를 입력하세요
SELECT count(USER_ID) USERS from USER_INFO
where year(JOINED) = 2021 and AGE between 20 and 29