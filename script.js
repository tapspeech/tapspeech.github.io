// init Infinite Scroll
$('.article-feed').infiniteScroll({
  path: '.pagination__next',
  append: '.article',
  status: '.scroller-status',
  hideNav: '.pagination',
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     window.location = "our_goal.html";

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) == document.body.offsetHeight) window.location = "page2.html";};
