//tooltip show
$('[data-toggle="tooltip"]').tooltip();

//full width screen image
$(".jumbotron").css({ height: $(window).height() + "px" });
$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

//navbar scroll
$(function(){
  $('a[href*="#"]:not([href="#"])').click(function(){
    var target=$(this.hash);
    if(target.length){
      $("html,body").animate(
        {
          scrollTop:target.offset().top-100
        },1000
      );
    }
  });

});

$('.button').click(function() {
  location.reload();
});