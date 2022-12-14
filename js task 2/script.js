var webcontainer = document.querySelector(".website_counter");
var visitcount = localStorage.getItem("page_view");
visitcount = 1;
localStorage.setItem("page_view",1);
visitcount = Number(visitcount) + 1;
localStorage.setItem("page_view",visitcount);
webcontainer.innerHTML=visitcount;


// A visitor visits an online clothing store www.xyzClothing.com .  


