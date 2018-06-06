$(document).ready(function(){
  });




  $(window).scroll(function() {

    console.log (Math.floor($(window).scrollTop()));
    var here = $(window).scrollTop();

    here = Math.floor(here);
   /// console.log(here);


      $("#vert_counter").css({

      }).text(""+ ($(window).scrollTop() * 0.5));
  });




// sticky stuff




$(window).scroll(function() {

if ($(this).scrollTop() > 900) {

  $("#sticky").css({
    "position": "fixed",
    "top": "830px",
    "opacity": ".5",
    "z-index": "-1",


  });

}

  else {
$("#sticky").css({
  "position": "fixed",
  "top": "-10px" ,
  "opacity": "1",

  "padding":"5px",

});
	}
});



// parallax stuff




$(window).scroll(function() {
   $(".vert_parallax").css({
       "top": ($(window).scrollTop()*1) + "px"
   }).text("Regular:"+ $(window).scrollTop());
});



  $(window).scroll(function() {
    $("#parallax_wrap div:nth-child(2)").css({
        "top": ($(window).scrollTop()*0.5) + "px"
    }).text("Slow:"+ $(window).scrollTop());
});


$(window).scroll(function() {
$("#parallax_wrap div:nth-child(3)").css({
 "top": ($(window).scrollTop()*2) + "px"
}).text("Fast:"+ $(window).scrollTop());
});
