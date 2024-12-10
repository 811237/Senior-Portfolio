//JQuery
$(document).ready(function(){
    $('#contact-btn').click(function(){
        if($('#contact').css('display') == 'none'){
            $('#contact').slideDown('slow');
        }else{
            $('#contact').slideUp('slow');
        }
    });
});

$(document).ready(function(){
    $('#personal-proj-btn').click(function(){
        if($('#personal-proj').css('display') == 'none'){
            $('#personal-proj').slideDown('slow');
        }else{
            $('#personal-proj').slideUp('slow');
        }
    });
});

$(document).ready(function(){
    $('#group-proj-btn').click(function(){
        if($('#group-proj').css('display') == 'none'){
            $('#group-proj').slideDown('slow');
        }else{
            $('#group-proj').slideUp('slow');
        }
    });
});

$(document).ready(function(){
    $('#school-proj-btn').click(function(){
        if($('#school-proj').css('display') == 'none'){
            $('#school-proj').slideDown('slow');
        }else{
            $('#school-proj').slideUp('slow');
        }
    });
});
