var upBtn=document.getElementById("up");function scrollFunction(){document.body.scrollTop>600||document.documentElement.scrollTop>600?(upBtn.style.display="flex",upBtn.classList.remove("is-hidden")):upBtn.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},upBtn.addEventListener("click",topFunction);
//# sourceMappingURL=index.5b6da9e5.js.map
