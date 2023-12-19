$(document).ready(function() {
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    }
  });
});
