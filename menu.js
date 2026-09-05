const voltarProTopo = document.querySelector('#voltar')

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        voltarProTopo.classList.add('visivel')
    }else{
        voltarProTopo.classList.remove('visivel')
    }
})

voltarProTopo.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});