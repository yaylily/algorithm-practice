SELECT b.BOOK_ID, a.AUTHOR_NAME, date_format(b.PUBLISHED_DATE, '%Y-%m-%d') PUBLISHED_DATE 
from BOOK b
inner join AUTHOR a on a.AUTHOR_ID = b.AUTHOR_ID
where CATEGORY = '경제'
order by PUBLISHED_DATE asc
