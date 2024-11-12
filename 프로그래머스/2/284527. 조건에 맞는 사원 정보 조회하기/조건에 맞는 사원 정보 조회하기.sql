select sum(g.SCORE) SCORE, e.EMP_NO, e.EMP_NAME, e.POSITION, e.EMAIL
from HR_EMPLOYEES e
inner join HR_GRADE g on g.EMP_NO = e.EMP_NO
group by e.EMP_NO
order by SCORE desc
limit 1