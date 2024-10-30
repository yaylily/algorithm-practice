select ub.TITLE, ub.BOARD_ID, ur.REPLY_ID, ur.WRITER_ID, ur.CONTENTS, date_format(ur.CREATED_DATE, '%Y-%m-%d')
from USED_GOODS_BOARD ub
inner join USED_GOODS_REPLY ur on ur.BOARD_ID = ub.BOARD_ID
where ub.CREATED_DATE like '2022-10-%'
order by ur.CREATED_DATE asc, ub.TITLE asc