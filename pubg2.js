$(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".share-btn").on("click", function () {
    $(".social-icon").toggleClass("active");
  });
  
  $(".hamburger").on("click", function () {
    $(".nav-content ul").toggleClass("active");
  });