$(function()
{
    //select by element
    $("p").fadeOut(3000).fadeIn(3000);

    //select by class
    //manipualation call
    $(".music").html("Sorry, no music for you!");

    //select by ID
    //event call
    $( "#containerInfo" ).click(function() {
        $( this ).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        }, 1000);
    });

    //jqueryUI
    $("section").colorize();
    $("section").click(function(){
        $(this).colorize("random") ;
    });


});