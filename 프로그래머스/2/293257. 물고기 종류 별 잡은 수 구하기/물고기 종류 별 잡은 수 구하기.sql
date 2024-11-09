select count(*) as FISH_COUNT, fn.FISH_NAME from FISH_INFO fi
inner join FISH_NAME_INFO fn on fn.FISH_TYPE = fi.FISH_TYPE
group by fn.FISH_NAME
order by FISH_COUNT desc 

