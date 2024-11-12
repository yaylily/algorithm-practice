select count(*) FISH_COUNT from FISH_INFO i
inner join FISH_NAME_INFO n on n.FISH_TYPE = i.FISH_TYPE
where n.FISH_NAME = 'BASS' or n.FISH_NAME = 'SNAPPER'