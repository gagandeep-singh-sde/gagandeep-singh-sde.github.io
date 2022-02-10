$(function(){
    if( $(window).width() <= 992){
        $("#navigation").removeClass("navbar-right")
    } 
});

  jQuery(document).ready(function($) {
 
        $('#mycarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#mycarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

$(function() {
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    var homepage = window.location.href;
    var link = "http://www.unitedgears.co.in/";
    if(homepage == link){
        $("#index\\.php").addClass("active");
    }
     $("#navigation li").each(function(){
          if($(this).attr("id") == pgurl){
              $(this).addClass("active");
          }
     });
});

// validator start

// validator

$(function(){
    $("#name > input").blur(function(){
        var name = /^[A-Za-z ]+$/;
       if(!($(this).val().match(name))){
           $("#name").addClass("has-error");
           $(this).val("");
           $(this).attr("placeholder","Please Enter a valid name");
           $("#namespan").addClass("glyphicon glyphicon-remove form-control-feedback");
           return false;
       }else{
           $("#name").removeClass("has-error");
           $("#name").addClass("has-success");
           $("#namespan").removeClass("glyphicon glyphicon-remove");
           $("#namespan").addClass("glyphicon glyphicon-ok form-control-feedback");
           return true;
       }
    });
    
    $("#code input").blur(function(){
        var code = /^\d{1,2}$/;
       if(!($(this).val().match(code))){
           alert("Plese Fill the country-code");
           $(this).val("");
           $("#code").addClass("has-error");
           return false;
       }else{
           $("#code").removeClass("has-error");
           $("#code").addClass("has-success");
           return true;
       }
    });
    
    $("#phone > input").blur(function(){
        var phone = /^\d{10}$/;
       if(!($(this).val().match(phone))){
           $("#phone").addClass("has-error");
           $(this).val("");
           $(this).attr("placeholder","Please Enter a valid Phone number");
           $("#phonespan").addClass("glyphicon glyphicon-remove form-control-feedback");
           return false;
       }else{
           $("#phone").removeClass("has-error");
           $("#phone").addClass("has-success");
           $("#phonespan").removeClass("glyphicon glyphicon-remove");
           $("#phonespan").addClass("glyphicon glyphicon-ok form-control-feedback");
           return true;
       }
    });
    
    $("#email > input").blur(function(){
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
       if(!($(this).val().match(email))){
           $("#email").addClass("has-error");
           $(this).val("");
           $(this).attr("placeholder","Please Enter a valid email");
           $("#emailspan").addClass("glyphicon glyphicon-remove form-control-feedback");
           return false;
       }else{
           $("#email").removeClass("has-error");
           $("#email").addClass("has-success");
           $("#emailspan").removeClass("glyphicon glyphicon-remove");
           $("#emailspan").addClass("glyphicon glyphicon-ok form-control-feedback");
           return true;
       }
    });
    
    $("#message > textarea").blur(function(){
       if($(this).val()==""){
           $("#message").addClass("has-error");
           $(this).val("");
           $(this).attr("placeholder","This field can't be empty");
           $("#messagespan").addClass("glyphicon glyphicon-remove form-control-feedback");
           return false;
       }else{
           $("#message").removeClass("has-error");
           $("#message").addClass("has-success");
           $("#messagespan").removeClass("glyphicon glyphicon-remove");
           $("#messagespan").addClass("glyphicon glyphicon-ok form-control-feedback");
           return true;
       }
    });
      
    $("#send").click(function(){
       if(($("#name > input").val() == "") || ($("#code > input").val() == "") || ($("#phone > input").val() == "") || ($("#message > input").val() == "")){
           $("#message , #phone , #name").addClass("has-error");
           $("#message > textarea, #phone > input, #name > input").attr("placeholder","This field can't be empty");
           $("#messagespan, #phonespan, #namespan").addClass("glyphicon glyphicon-remove form-control-feedback");
           $("#code").addClass("has-error");
           return false;
       }else{
           return true;
            }
    });
});

// validator ends

$(function(){
    $("#img-btn1").click(function(){
        $("#img1").click();
    });
    $("#img-btn2").click(function(){
        $("#img2").click();
    });
    $("#img-btn3").click(function(){
        $("#img3").click();
    });
    $("#img-btn4").click(function(){
        $("#img4").click();
    });
    $("#img-btn5").click(function(){
        $("#img5").click();
    });
    $("#img-btn6").click(function(){
        $("#img6").click();
    });
    $("#img-btn7").click(function(){
        $("#img7").click();
    });
    $("#img-btn8").click(function(){
        $("#img8").click();
    });
    $("#img-btn9").click(function(){
        $("#img9").click();
    });
});