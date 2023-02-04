$(document).ready(function () {
  var $popup = document.querySelector(".popup");
  var $overlay = document.querySelector('.overlay');
  var $close = document.querySelector('.close-btn span');
  $(".btn_one").click(function (e) {
    $popup.style.top = "10%";
    $overlay.style.display = "block"
  });

  $(".btn_two").click(function (e) {
    $popup.style.top = "10%";
    $overlay.style.display = "block"
  });

  $(".btn_tree").click(function (e) {
    $popup.style.top = "10%";
    $popup.style.left = "39%"
    $overlay.style.display = "block"
  });

  $close.click(function (e) {
    $popup.style.top = "300%"
  })

  
});
