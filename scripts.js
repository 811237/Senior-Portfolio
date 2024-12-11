//JQuery
$(document).ready(function(){
    $('#contact-btn').click(function(){
        if($('#contact').css('display') == 'none'){
            $('#contact').slideDown('slow');
        }else{
            $('#contact').slideUp('slow');
        }
    });

    $('#personal-proj-btn').click(function(){
        if($('#personal-proj').css('display') == 'none'){
            $('#personal-proj').slideDown('slow');
        }else{
            $('#personal-proj').slideUp('slow');
        }
    });

    $('#group-proj-btn').click(function(){
        if($('#group-proj').css('display') == 'none'){
            $('#group-proj').slideDown('slow');
        }else{
            $('#group-proj').slideUp('slow');
        }
    });

    $('#school-proj-btn').click(function(){
        if($('#school-proj').css('display') == 'none'){
            $('#school-proj').slideDown('slow');
        }else{
            $('#school-proj').slideUp('slow');
        }
    });

    $('#offcanvas-toggle-btn').click(function(){
        $('#offcanvas-toggle-btn').animate({left: '-=50px'}, 'slow');
    });

    $('#offcanvas-toggle-btn').hover(function(){
        $('#offcanvas-toggle-btn > div').css('background-color', 'rgb(197, 197, 197)');
    },
    function(){
        $('#offcanvas-toggle-btn > div').css('background-color', 'rgb(56, 56, 56)');
    });

    $('#header-btn-close').click(function(){
        $('#offcanvas-toggle-btn').animate({left: '+=50px'}, 'slow');
    })
});
