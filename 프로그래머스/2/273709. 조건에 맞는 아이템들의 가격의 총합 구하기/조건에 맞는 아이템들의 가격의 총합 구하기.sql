select sum(PRICE) TOTAL_PRICE from ITEM_INFO
group by RARITY
having RARITY = "LEGEND"