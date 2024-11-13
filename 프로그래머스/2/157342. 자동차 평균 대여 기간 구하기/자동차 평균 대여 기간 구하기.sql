SELECT CAR_ID, round(avg(datediff(END_DATE,start_date)+1), 1) AVERAGE_DURATION
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
group by CAR_ID
having AVERAGE_DURATION >= 7
order by AVERAGE_DURATION desc, CAR_ID desc




--  평균 대여 기간이 7일 이상인 자동차들
-- 자동차 ID와 평균 대여 기간(컬럼명: AVERAGE_DURATION) 리스트를 출력
-- 평균 대여 기간은 소수점 두번째 자리에서 반올림
-- 평균 대여 기간을 기준으로 내림차순 정렬해주시고, 평균 대여 기간이 같으면 자동차 ID를 기준으로 내림차순