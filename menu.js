//usado para cuando se preciona click en un submenu: mostrar los submenus
$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(p){
    p.stopPropagation();
})
            