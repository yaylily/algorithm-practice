select ITEM_ID, ITEM_NAME, RARITY from ITEM_INFO
where ITEM_ID in (select t.ITEM_ID from ITEM_INFO i
                  join ITEM_TREE t on t.PARENT_ITEM_ID = i.ITEM_ID
                  where i.RARITY = "RARE")
order by ITEM_ID desc
                
-- 아이템의 희귀도가 'RARE'인 아이템들
-- 다음 업그레이드 아이템의 아이템 ID(ITEM_ID), 아이템 명(ITEM_NAME), 아이템의 희귀도(RARITY)를 출력
-- 결과는 아이템 ID를 기준으로 내림차순