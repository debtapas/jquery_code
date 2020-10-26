// JavaScript Document


//22 - jquery password strength checker ====================

$(document).ready(function(){
    $('#status').keyup(function(){
		var len = $('#status').val().length;
		//$('.pwd-field').text(len);
		
		if(len<1)
		{
			$('.pwd-field').text('');
			$('.pwd-field').removeClass('red');
			$('.pwd-field').removeClass('green');
			$('.pwd-field').removeClass('orange');
		}
		
		else if(len<=4)
		{
			$('.pwd-field').text('Weak');
			$('.pwd-field').addClass('red');
			$('.pwd-field').removeClass('green');
			$('.pwd-field').removeClass('orange');
		}
		
		else if(len<=8)
		{
			$('.pwd-field').text('Good');
			$('.pwd-field').addClass('orange');
			$('.pwd-field').removeClass('green');
			$('.pwd-field').removeClass('red');
		}
		
		else
		{
			$('.pwd-field').text('Strong');
			$('.pwd-field').addClass('green');
			$('.pwd-field').removeClass('red');
			$('.pwd-field').removeClass('orange');
		}
		
		
		});
});



//23 - jquery focusin event ===========================
$(document).ready(function() {
    $(':input#username, :input#password').focusin(function() {
        $(this).addClass('red');
    });
	
	$(':input').focusout(function() {
		$(this).removeClass('red');
        
    });
	
	$('#username').focusin(function() {
        $('.user').text('Type your name');
    });
	$('#username').focusout(function() {
		$('.user').text('');        
    });
	
	$('#password').focusin(function() {
        $('.pass').text('Type your password');
    });
	$('#password').focusout(function() {
        $('.pass').text('');
    });
});



//25 - jquery mouseover and mouseout =============================

$(document).ready(function() {
    $('#show').mouseover(function() {
        $('#show').val('Put your mouse back to hide');
		$('.box').show(3000);
    });
	
	
	$('#show').mouseout(function() {
        $('#show').val('Hover here to show');
		$('.box').hide(2000);
    });        
    
});



//26 - Dynamically change body ================================
$(document).ready(function() {
	
	var color = $('#list').val();
	$('body').css("background",color);
		
    $('#list').change(function() {
        var color = $('#list').val();
		$('body').css("background",color);
    });
});


//27 - jquery live event =========================================

$(document).ready(function() {
	$('p.dynamic-text').click(function() {
        $(this).after('<p>This is dynamic text, click on this for a new text</p>');
    });
	
	/*$('p').live("click",function(){
        $(this).after("<p>This is dynamic text, click on this for a new text</p>");
    });*/
    
});


//28 - jquery bind and unbind event =============================================

$(document).ready(function() {
	$('#bn').click(function() {
        $('.box-1').text('Hover your mouse over to hide the box');
		$('.box-1').bind("mouseover",function(){
			$('.box-1').hide(4000);
		});
    });
	
	
	
	$('#unbn').click(function() {
		$('.box-1').text('Jquary is not performing');
        $('.box-1').unbind('mouseover');
		})
});



//29/30/31 - jquery fadein and fadeout ====================================================

$(document).ready(function() {
    $('#clickme').click(function() {
        $('.box-2').fadeIn(4000);
    });
	
	$('#clickyou').click(function() {
		$('.box-2').fadeOut(2000);
        
    });
	
	$('#clickboth').click(function() {
        $('.box-2').fadeToggle(2500);
    });
	
});


//32/33/34 - jquery hide / show /  =================================

$(document).ready(function() {
    $('#btn-hide').click(function() {
        $('.box-3').hide(2000);
    });
	
	$('#btn-show').click(function() {
        $('.box-3').show(1000);
    });
	
	$('#btn-both').click(function() {
        $('.box-3').toggle(1500);
    });
});

//35/36/37 - jquery slideDown/slideUp/slidetoggle =====================================

$(document).ready(function() {
	$('#sldDwn').click(function() {
        $('#slideimg').slideDown(2000);
    });
	
	$('#sldUp').click(function() {
        $('#slideimg').slideUp(1000);
    });
	
	$('#sldTggle').click(function() {
        $('#slideimg').slideToggle(650);
    });
});



//38 - jquery animate function / 39 - jquery stop / 40 - delay  =================================

$(document).ready(function() {
	$('#btn-animate').click(function() {
		//$('.box-4').css("width", "450px");
		$('.box-4').delay(5000).animate({width:"+=250px"}, 1500); // increase width -------
		$('.box-4').animate({top:"+=50px"},2500); //to increase space on top in every click -------
		$('.box-4').animate({left:"-=55px"}, 3000); //to decrease space on left in every click -------
		$('.box-4').delay(0).animate({width:"-=250px"}, 10); // increase width -------
		$('.box-4').animate({top:"-=50px"},20); //to increase space on top in every click -------
		$('.box-4').animate({left:"+=55px"}, 30); //to decrease space on left in every click -------
		
		
	$('#btn-stop').click(function() {
        $('.box-4').stop();
    });
        
    });
    
});

// 41 - jquery append function and 42 - jquery prepend function  ==========================================

$(document).ready(function(e) {
    $('#btn-add').click(function(e) {
        $('p.add').append('This is the next content of the paragraph.');
    });
	
	$('#btn-addbefore').click(function(e) {
        $('p.add').prepend('THIS IS THE TEXT WHICH ADD FIRST OF PARAGRAPH');
    });
});


//43 - dynamically add form fields using ======================================

$(document).ready(function() {
    $('#btn-field').click(function() {
        var label = prompt ("Enter Label");
		var type = prompt ("Enter input type");
		
		if(label && type)
		{
			$('p.first').append("<p>"+label+ " " +"<input type ='"+type+"'/>"+"<p/>");
			
		}
		
    });
});

// 44 - jquery text =======================================================

$(document).ready(function() {
	$('#btn-chage').click(function() {
        $('p.new').text('This text comming from jquary');
    });
    
});


//45 - jquery html ========================================================
$(document).ready(function(e) {
    $('#btn-html').click(function() {
        $('.html-text').html("<img src='test.jpg'/>");
    });
});


//46 - jquery val =====================================================
$(document).ready(function(e) {
    $('#btn-submit').click(function(e) {
        var username = $('#user').val();
		var password = $('#password').val();
		if(username=="")
		{
			$('.error').text('Please enter username');
		}
    });
});



// 47 - jquery find function ===========================

$(document).ready(function() {
    $('.find').find('p.exact').css('color','#0084ff')
});


// 48 - jquery each function ====================================

$(document).ready(function() {
	$('li.count').each(function() {
		alert($(this).text().lengh);
    });
});


//49 - jquery load function ===================================

$(document).ready(function(e) {
    $('#load').click(function(e) {
        $('#exerternal').load('applications.html');
    });
});


//Creat Events in jQuery ===================================

$(document).ready(function() {
    $('img.center').mouseenter(function(){
		$(this).css({
			'transform':'scale(2,2)',
			'transition':'0.7s ease'
		});
	})
	$('img.center').mouseout(function(){
		$(this).css({
			'transform':'scale(1,1)',
			'transition':'0.3s ease'
		});
	})
});


//Custom Animation in jQuery ===================================
$(document).ready(function() {
    $('.slideup').click(function() {
		$('nav.navcol h2').animate({
			'marginTop':'-55px'
			}, function(){
				$(this).parent('nav.navcol').fadeIn(1000).slideUp(2500);
				});
        
    });
	
	$('.slidedown').click(function() {
		$('nav.navcol').slideDown(3000, function(){
			$(this).children('h2').animate({
				'marginTop':'0px'
				});
			
			}).fadeOut(1500);
			
      });
	
	$('.slidetoggle').click(function() {
        $('nav.navcol').stop().slideToggle('slow');
    });
	
	$('.stopper').click(function() {
        $('.navcol').stop();
    });
});


//Get and Change HTML Markup and Content dynamically ===================================

	$(document).ready(function() {
        $('.square').click(function() {
            $(this).html("<h3>This is Replaced text</h3> <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,</p>");
        });
		
		$('.square').click(function() {
            $(this).html();
        });
    });




// The on() Method ======================================================================

$(document).ready(function(e) {
    $('h1.onmethod').on({
		mouseenter:function(){
			$(this).css('background-color','#ff3232')
			},
			
		mouseleave:function(){
			$(this).css('background-color','#ffc600')
			},
			
		click:function(){
			$(this).css('background-color','#00ffc0')
			}
		});
});


// jQuery DOM Manipulation ===============================================================
/*$(document).ready(function(){
	&("#btn4").click(function(){
		alert($("#paragraph2").text());
	});


});*/


// jQuery - Set Content and Attributes ========================================

$(document).ready(function(){
	$("#btn-set-text").click(function(){
		$("#test7").text("This text comes from dinamicaly")
	});

	$("#btn-set-html").click(function(){
		$("#test8").html("<b>This text comes from dynamically</b>");
	});

	$("#btn-set-value").click(function(){
		$("#inputfield").val("This text comes from dynamically");
	});
});


// Add New HTML Content ========================================

$(document).ready(function(){
	$(".appendtext").click(function(){
		$("p.apndtxt").append("this text coming from jquery for append");
	});

	$(".appendtext").click(function() {
		$("div.apndtxt").append("that was coming from jquery for append");
	})
	
});


$(document).ready(function(){
	$(".appendtext").click(function(){
		$("ul.prepend").prepend("<li>This is a new listing element</li>");
	});
});

// jQuery - Remove Elements ==============================

$(document).ready(function(){
	$("#remv-elemnt").click(function(){
		$("ul.rmv-element").remove();
	});

	$("#empty-element").click(function(){
		$("ul.rmv-element").empty();
	});
});

// jQuery Traversing =======================================

//parent traversing --------------

/*$(document).ready(function(){
	//$(".myhome").parent().prepend('<p>THIS IS DUMMY TEXT COMMING FROM jQuery</p>');

	//$(".myhome").parents().prepend('<p>THIS IS DUMMY TEXT COMMING FROM jQuery</p>');

	$(".myhome").parentsUntil(".wb").prepend('<p>THIS IS DUMMY TEXT COMMING FROM jQuery</p>');
})*/


//child traversing ------------

$(document).ready(function(){
	//$(".world").find(".wb").prepend('<p>Now this is your selector</p>');

	//$(".world").first().prepend('<p>Now this is your selector</p>');

	//$(".world").children(".kolkata").prepend('<p>Now this is your selector</p>');

	//$(".myhome li").last().css("background-color","green");

	//$(".myhome li").eq(2).css("color","red");

	//$(".myhome li").filter(".select-elmnt").css("background-color","red");

	$(".myhome li").not(".select-elmnt").css("background-color","yellow");

});

//sibling ------------
$(document).ready(function(){
	$(".btn-sibling").click(function(){

		//$(".C").siblings().fadeOut(400);

		//$(".D").next().fadeOut(800);

		//$(".D").nextAll().fadeOut(1200);

		//$(".D").prev().fadeOut(1400);

		//$(".D").prevAll().fadeOut(1500);

		//$(".G").prevUntil(".B").fadeOut(1100);

		$(".C").nextUntil(".H").fadeOut(860)
	});
});













