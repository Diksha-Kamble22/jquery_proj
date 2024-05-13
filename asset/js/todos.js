
// 3] keypress() ,val(),prepend() 

$(".todoinput").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val()==="") return;
		$("ul").prepend("<li><span class='left'><i class='fa fa-trash'></i></span>  "
		+$(this).val()+"<span class='right'><i class='fa fa-pencil'></li>");
		$(this).val("");
	}
});
//4]slideToggle()

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});
 //6]toggleClass(),on()
$("ul").on("click", "span.text", function(event) {
	$(this).toggleClass("completed");
});
//9] parent(),fadeOut(),remove()
$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});
//11] text() ,html(),
$("ul").on("click", "span.right", function(event) {
	var parent = $(this).parent();
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");
	$(".editinput").keypress(function(e) {
		if(e.which === 13) {
			if($(this).val() === "") {
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});
// header    //13] animate() click()
$(document).ready(function(){
	$(".toggle-btn").click(function(){
	  $(".toggle-btn").animate({right: '250px'});
	});
  });
  //14] dblclick()
  $(document).ready(function(){
	$(".toggle-btn").dblclick(function(){
	  $(".toggle-btn").animate({left: '25px'});
	});	
});
//16] hover() ,css()
  $(document).ready(function(){
    $(".navbar-nav").hover(function(){
      $(this).css("background-color", "#70698d");
      }, function(){
      $(this).css("background-color", "");
    });
  });

  //17] slice()
  $(document).ready(function(){
	$("button").click(function() {
	  $(".text").slice(1, 4).css({"background-color": "yellow", "color": "red"});
	  });
	});
	//18] slideDown()
	$(document).ready(function(){
		$("#flip").click(function(){
		  $("#panel").slideDown("slow");
		});
	  });

	  //20] hide() ,show()
	  $(document).ready(function(){
		$("#button2").click(function(){
		  $("h3").hide();
		});
		$(".btn").click(function(){
		  $("h3").show();
		});
	  });
     //21] focus()
	  $(document).ready(function(){
		$(".todoinput").focus(function(){
		  $(this).css("background-color", "pink");
		});
	});
      //23] mouseleave() ,alert()
	$(document).ready(function(){
		$("h3").mouseleave(function(){
		  alert("Bye! You now leave Heading");
		});
	  });
	  //24]  mouseup()
	  $(document).ready(function(){
		$("h2").mouseup(function(){
		  alert("Mouse up over Doraemon!");
		});
	  });
     //26] fadeTo() ,fadeToggle()
	  $(document).ready(function(){
		  $(".shop2").click(function(){
			$("#myDiv").fadeTo("slow", 0.25);
			   });
	  });

	  $(document).ready(function(){
		$(".shop2").dblclick(function(){
		  $("#myDiv").fadeToggle();
		  
			 });
	});
       // 27]last()
	  $(document).ready(function(){
		$("div").last().css("background-color", "yellow");
	  });