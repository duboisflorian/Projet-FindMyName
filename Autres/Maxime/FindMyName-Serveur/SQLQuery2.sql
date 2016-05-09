select * from Theme t inner join Reponse r on r.Themeid=t.id inner join Mot m on m.Reponseid=r.id
where t.text='OL'
order by m.text desc
--select * from Reponse r where Themeid = 26

--SELECT * from Mot where Reponseid=731
