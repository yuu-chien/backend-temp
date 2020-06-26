let moreState = 1;
$(".btn-expand").click(function(){
  $(".more-btn-wrap").slideToggle();
  if (moreState) {
    $(".btn-expand").text("expand_less");
    moreState = 0;
  }else {
    $(".btn-expand").text("expand_more");
    moreState = 1;
  }
})