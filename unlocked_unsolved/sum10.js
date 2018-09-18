sum10=s=>s.split("???").reduce((a,c)=>parseInt(a)+parseInt(c))>=10;

"arrb6???4xxbl5???eee5abc".replace(/\D/g,'')
sum10=s=>s.split("???")

sum10=s=>s.split("???").map(e=>parseInt(e.replace(/\D/g,'').split(""))).reduce((a,c)=>a+c)>=10

Test.expect(true);
process.reallyExit();