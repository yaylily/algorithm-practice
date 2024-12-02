SELECT ORDER_ID, PRODUCT_ID, date_format(OUT_DATE, '%Y-%m-%d'), case
 when OUT_DATE is Null then '출고미정'
 when OUT_DATE <= '2022-05-01' then '출고완료'
 when OUT_DATE > '2022-05-01' then '출고대기' 
 end 출고여부
from FOOD_ORDER
order by ORDER_ID asc


-- 2022년 5월 1일을 기준으로 주문 ID, 제품 ID, 출고일자, 출고여부를 조회
-- 출고여부는 2022년 5월 1일까지 출고완료로 이 후 날짜는 출고 대기로 미정이면 출고미정으로 출력
-- 결과는 주문 ID를 기준으로 오름차순