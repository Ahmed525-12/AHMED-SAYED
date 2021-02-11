// -------------------------------------------------navbar-----------------------------


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// -------------------------------------------------navbar-----------------------------

// -------------------------------------------------- header ----------------------------


var typed = new Typed('.element', {
    strings: ['','AHMED SAYED','WEB DEVELOPER','FRONT-END',],
    smartBackspace: true ,
    typeSpeed: 100,
    loop:true,
    backSpeed: 50,
    backDelay: 500,
  });


// -------------------------------------------------- header ----------------------------

// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------

$(document).ready(function(){
    
    $("#store-container").fadeOut(3000,function(){
        $("#loading").fadeOut(2000,function(){
          
            $("#loading").remove()
        })
    })
})

// -----------------------------------------------------------------------------------------------------

var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("activee");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("activee");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    section.scrollIntoView({
      behavior: "smooth",
    });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});