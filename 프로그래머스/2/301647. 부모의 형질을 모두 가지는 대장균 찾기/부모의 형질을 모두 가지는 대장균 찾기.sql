select b.ID, b.GENOTYPE, a.GENOTYPE PARENT_GENOTYPE from ECOLI_DATA a
inner join ECOLI_DATA b
on a.ID = b.PARENT_ID and a.GENOTYPE & b.GENOTYPE = a.GENOTYPE


-- 부모의 형질을 모두 보유한 대장균의 ID(ID), 대장균의 형질(GENOTYPE), 부모 대장균의 형질(PARENT_GENOTYPE)을 출력
-- 결과는 ID에 대해 오름차순 정렬