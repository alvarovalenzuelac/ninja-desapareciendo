$("#imagenes img").on("click",function(){
    $(this).slideUp(800,function(){
        $(this).parent().addClass("p-5")
    })
})

$("#btn-reset").on("click",function(){
    $("#imagenes div").removeClass("p-5")
    $("img").slideDown(800)
})