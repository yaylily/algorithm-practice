SELECT i.NAME, i.DATETIME from ANIMAL_INS i
left join ANIMAL_OUTS o on o.ANIMAL_ID = i.ANIMAL_ID
where o.DATETIME is Null
order by i.DATETIME asc
limit 3