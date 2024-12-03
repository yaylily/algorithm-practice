SELECT b.CATEGORY, sum(s.SALES) TOTAL_SALES from BOOK b
inner join BOOK_SALES s on s.BOOK_ID = b.BOOK_ID
where s.SALES_DATE like '2022-01-%'
group by b.CATEGORY
order by b.CATEGORY

-- 2022년 1월의 카테고리 별 도서 판매량을 합산하고
-- 카테고리(CATEGORY), 총 판매량(TOTAL_SALES) 리스트를 출력
-- 카테고리명을 기준으로 오름차순 정렬