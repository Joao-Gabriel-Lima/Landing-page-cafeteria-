document.querySelector("#menuH")
.addEventListener("click", function() {
    document.querySelector("header ul").classList.toggle("menu-ativo")
});

document.querySelectorAll("header ul a")
.forEach(function(item) {
    item.addEventListener("click", function(){
        document.querySelector("header ul").classList.remove("menu-ativo")
    })
});

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