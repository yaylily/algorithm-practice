select i.ITEM_ID, i.ITEM_NAME from ITEM_INFO i
inner join ITEM_TREE t on t.ITEM_ID = i.ITEM_ID
where t.PARENT_ITEM_ID is NULL
order by i.ITEM_ID