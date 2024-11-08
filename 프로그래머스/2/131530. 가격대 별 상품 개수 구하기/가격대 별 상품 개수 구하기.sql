SELECT floor(price/10000)*10000 as PRICE_GROUP, count(*) as PRODUCTS from PRODUCT
group by PRICE_GROUP
order by PRICE_GROUP

-- 만원 단위 가격대 별로 상품 개수 출력
-- 컬럼명 따로 지정
-- 가격대 기준 오름차순