$( document ).ready(function() {
    resetGrid();

  $(".sidebar").on("click", ".hide-sidebar-button", function(){
    $(".sidebar").toggleClass("shown");
    $(".content").toggleClass("sidebar-active");
  });

  new ResizeSensor($('.blogov'), function(){
    resetGrid();
  });
})

var resetGrid = function(){
  $('.blogov').removeClass("cols_1 cols_2 cols_3 cols_4");
  if($('.blogov').width() < 680 ){
    $('.blogov').addClass("cols_1");
  }else if($('.blogov').width() < 960 ){
    $('.blogov').addClass("cols_2");
  }else if($('.blogov').width() < 1024){
    $('.blogov').addClass("cols_3");
  }else{
    $('.blogov').addClass("cols_4");
  }
}
