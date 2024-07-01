// typed.js script
var type = new Typed(".type", {
    strings: ["WEB DESIGNER", "FRONTEND DEVELOPER"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });
  
  // hamburger-navbar
  $(document).ready(function () {
    // $("#hamburger").hide();
    $(".close").hide();
  
    $(".open").click(function () {
      $("#hamburger").slideDown(500);
      $(".close").show();
      $(".open").hide();
    });
  
    $(".close").click(function () {
      $("#hamburger").slideUp(500);
      $(".open").show();
      $(".close").hide();
    });
  });
  
  // progress-bar script
  window.addEventListener("scroll", () => {
    let _progressBar1 = document.querySelectorAll(".rating").item(0);
    let _progressBar2 = document.querySelectorAll(".rating").item(1);
    let _progressBar3 = document.querySelectorAll(".rating").item(2);
    let _progressBar4 = document.querySelectorAll(".rating").item(3);
    let _progressBar5 = document.querySelectorAll(".rating").item(4);
    let _progressBar6 = document.querySelectorAll(".rating").item(5);
    // let _progressBar7 = document.querySelectorAll(".rating").item(6);
    // let _progressBar8 = document.querySelectorAll(".rating").item(7);
    let _progressload1 = _progressBar1.getBoundingClientRect().top;
    let _progressload2 = _progressBar2.getBoundingClientRect().top;
    let _progressload3 = _progressBar3.getBoundingClientRect().top;
    let _progressload4 = _progressBar4.getBoundingClientRect().top;
    let _progressload5 = _progressBar5.getBoundingClientRect().top;
    let _progressload6 = _progressBar6.getBoundingClientRect().top;
    // let _progressload7 = _progressBar7.getBoundingClientRect().top;
    // let _progressload8 = _progressBar8.getBoundingClientRect().top;
    let screenPositon = window.innerHeight;
    if (
      _progressload1 < screenPositon ||
      _progressload2 < screenPositon ||
      _progressload3 < screenPositon ||
      _progressload4 < screenPositon ||
      _progressload5 < screenPositon ||
      _progressload6 < screenPositon 
      // _progressload7 < screenPositon ||
      // _progressload8 < screenPositon
    ) {
      _progressBar1.classList.add("rating-1");
      _progressBar2.classList.add("rating-2");
      _progressBar3.classList.add("rating-3");
      _progressBar4.classList.add("rating-4");
      _progressBar5.classList.add("rating-5");
      _progressBar6.classList.add("rating-6");
      // _progressBar7.classList.add("rating-7");
      // _progressBar8.classList.add("rating-8");
    } else {
      _progressBar1.classList.remove("rating-1");
      _progressBar2.classList.remove("rating-2");
      _progressBar3.classList.remove("rating-3");
      _progressBar4.classList.remove("rating-4");
      _progressBar5.classList.remove("rating-5");
      _progressBar6.classList.remove("rating-6");
      // _progressBar7.classList.remove("rating-7");
      // _progressBar8.classList.remove("rating-8");
    }
  });
  
  // skill-section-script
  $(document).ready(function () {
    $(".education-content").hide();
    $("#skillbtn").css({
      backgroundColor: "var(--red-hover-color)",
      color: "var(--light-color)",
    });
  
    $("#educationbtn").click(function () {
      $(".education-content").show();
      $(".tab-list").hide();
      $("#educationbtn").css({
        backgroundColor: "var(--red-hover-color)",
        color: "var(--light-color)",
      });
      $("#skillbtn").css({ backgroundColor: "", color: "var(--red-color)" });
    });
  
    $("#skillbtn").click(function () {
      $(".education-content").hide();
      $(".tab-list").show();
      $("#skillbtn").css({
        backgroundColor: "var(--red-hover-color)",
        color: "var(--light-color)",
      });
      $("#educationbtn").css({ backgroundColor: "", color: "var(--red-color)" });
    });
  });
  
  // module script
  $(document).ready(function () {
    var _portfolioBox = $(".portfolio-box");
    // module-open
    $(_portfolioBox).click(function () {
      $(".module").show("slow").css("display", "flex");
      var weblink = $(this)
        .children(".portfolio-overlay-box")
        .children("a")
        .attr("href");
      $("#iframe-box").attr("src", weblink);
      console.log($(".module-fullscreen-btn").parent("a").attr("href", weblink));
    });
  
    // module-close
    $(".module-close-btn").click(function () {
      $(".module").hide("slow");
      $("#iframe-box").attr("src", "");
    });
  });
  
  // theme-change
  
  $(document).ready(function () {
    $(".day-mode").hide();
  
    $(".night-mode").click(function () {
      $(".day-mode")
        .css({
          color: "#fff",
          border: "1px solid #fff",
          padding: "1rem",
          "border-radius": "50%",
        })
        .show(0);
      $(".night-mode").hide();
      $("#header").css({
        "background-color": "#000",
        "box-shadow": "0px 1px 0px grey",
      });
      $(".nav-link, .hamburger-nav-link, .hamburger-btn").css({ color: "#fff" });
      $("#hamburger").css({ "background-color": "#000" });
      $("#home-section").css({ "background-color": "#000" });
      $("#about").css({ "background-color": "#000", color: "#fff" });
      $(
        ".about-heading-2, .skill-heading-2, .education-heading-2, .portfolio-heading-2 , .contact-heading-2"
      ).css({ "--dark-color": "#fff" });
      $(".about-social-link").css({ color: "#fff" });
      $("#skill").css({ "background-color": "#1f1f1f", color: "#fff" });
      $(".skill-content").css({ "background-color": "#000", color: "#fff" });
      $(".education-box").css({
        "background-color": "#1f1f1f",
        "box-shadow": "2px 2px 0px grey",
      });
      $("#portfolio").css({ "background-color": "#000", color: "#fff" });
      $("#contact").css({ "background-color": "#1f1f1f", color: "#fff" });
      $(".right-contact-box, .form-row>input, .form-row>textarea").css({
        "background-color": "#1f1f1f",
        color: "#fff",
      });
      $(".left-contact, .right-contact").css({
        "background-color": "#000",
        color: "#fff",
      });
    });
  });
  
  $(".day-mode").click(function () {
    $(".night-mode").show(500);
    $(".day-mode").hide();
    $("#header").css({
      "background-color": "#fff",
      "box-shadow": "0px 1px 0px grey",
    });
    $(".nav-link,.hamburger-nav-link, .hamburger-btn").css({ color: "#000" });
    $("#hamburger").css({ "background-color": "#fff" });
    $("#home-section").css({ "background-color": "#fff" });
    $("#about").css({ "background-color": "#fff", color: "#000" });
    $(
      ".about-heading-2, .skill-heading-2, .education-heading-2, .portfolio-heading-2 , .contact-heading-2"
    ).css({ "--dark-color": "#000" });
    $(".about-social-link").css({ color: "#000" });
    $("#skill").css({ "background-color": "#dddddd", color: "#000" });
    $(".skill-content").css({ "background-color": "#fff", color: "#000" });
    $(".education-box").css({
      "background-color": "#fff",
      "box-shadow": "2px 2px 0px #dddddd",
    });
    $("#portfolio").css({ "background-color": "#fff", color: "#000" });
    $("#contact").css({ "background-color": "#dddddd", color: "#000" });
    $(".right-contact-box, .form-row>input, .form-row>textarea").css({
      "background-color": "#fff",
      color: "#000",
    });
    $(".left-contact").css({ "background-color": "#fff", color: "#000" });
    $(".right-contact").css({ "background-color": "#dddddd", color: "#000" });
  });
  
  
  /* ***************buttom-top button**************** */
  
  document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function () {
        // Show or hide the button based on the scroll position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
        // Scroll to the top of the page when the button is clicked
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  });