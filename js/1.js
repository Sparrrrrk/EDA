$(document).ready(function(){
    $(".glyphicon").unbind("click").click(function(){
        if($(this).hasClass("glyphicon-heart-empty")){
            $(this).removeClass("glyphicon-heart-empty").addClass('glyphicon-heart');
        }
        else if($(this).hasClass("glyphicon-heart")){
            $(this).removeClass("glyphicon-heart").addClass('glyphicon-heart-empty');
        }
    })

})