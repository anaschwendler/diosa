$(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

$('body').scrollspy({target: ".navbar", offset: 50});

function scrollNav() {
    $('.nav a').click(function(){
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 20
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var $form = $('form');

$("#contact-message").submit(function(e){
    if(isEmail($("input[type='email']").val()) === false ) {
        $("#miss-email").removeClass('hidden');
        e.preventDefault();
    }
    else {
        $.post($(this).attr('action'), $(this).serialize(), function(response){
            $(".post-contact").removeClass('hidden');
            $(".pre-contact").addClass('hidden');
        },'json');
    }
    return false;
});

$("#contact-message").submit(function(e){
    if(isEmail($("input[type='email']").val()) === false ) {
        $("#miss-email").removeClass('hidden');
        e.preventDefault();
    }
    else {
        $.post($(this).attr('action'), $(this).serialize(), function(response){
            $(".post-contact").removeClass('hidden');
            $(".pre-contact").addClass('hidden');
        },'json');
    }
    return false;
});

$("#mc-embedded-subscribe-form1").submit(function(e){

    if(isEmail($("input#mce-EMAIL1").val()) === false ) {
        $("#miss-email-modal").removeClass('hidden');
        e.preventDefault();
    }
    else {
        $(".post-modal").removeClass('hidden');
        $(".pre-modal").addClass('hidden');
        $.post($(this).attr('action'), $(this).serialize(), function(response){
        },'json');
    }
    return false;
});

$("#mc-embedded-subscribe-form").submit(function(e){

    if(isEmail($("input#mce-EMAIL").val()) === false ) {
        $("#miss-email-footer").removeClass('hidden');
        e.preventDefault();
    }
    else {
        $(".post-footer").removeClass('hidden');
        $(".pre-footer").addClass('hidden');
        $.post($(this).attr('action'), $(this).serialize(), function(response){
        },'json');
    }
    return false;
});

$('.be-partner').click(function(){
    $(".post-partner").removeClass('hidden');
    $(".pre-partner").addClass('hidden');
});
