select YEAR(e.DIFFERENTIATION_DATE) YEAR, m.MAX-e.SIZE_OF_COLONY YEAR_DEV, e.ID from ECOLI_DATA e
inner join(select YEAR(DIFFERENTIATION_DATE) YEAR, max(SIZE_OF_COLONY) MAX from ECOLI_DATA
group by YEAR(DIFFERENTIATION_DATE)) m on m.YEAR = YEAR(e.DIFFERENTIATION_DATE)
order by YEAR asc, YEAR_DEV asc