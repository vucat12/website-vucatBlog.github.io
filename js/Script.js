// background-loading
$(document).ready(function () {
  $(".title-center").click(function () {
    window.location.href = "index.html";
  })
})

// Filter
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable blockquote").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//scroll footer
$("#myButton").click(function () {
  $('html, body').animate({
    scrollTop: $(".about-section").offset().top
  }, 1000);
});

// previous page and next page
$(document).ready(function () {
  var divs = $('.mydivs>div');
  var now = 0; // currently shown div
  divs.hide().first().show(); // hide all divs except first
  $("button[name=next]").click(function () {
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
  });
  $("button[name=prev]").click(function () {
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
  });
});