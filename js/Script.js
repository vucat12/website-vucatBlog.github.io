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

// slide pre,1,2,3,next
$(document).ready(function () {
  $("#button-next").click(function () {
    if (window.location.pathname == "/firstCode/FirstBlog/index.html") {
      $(".button-next").attr("href", "/firstCode/FirstBlog/content1.html");
    }
    else {
      if (window.location.pathname == "/firstCode/FirstBlog/content1.html") {
        $(".button-next").attr("href", "/firstCode/FirstBlog/content2.html");
      }
      else {
        if (window.location.pathname == "/firstCode/FirstBlog/content2.html") {
          $(".button-next").attr("href", "/firstCode/FirstBlog/index.html");
        }
      }
    }
  });
});
$(document).ready(function () {
  $("#button-previous").click(function () {
    if (window.location.pathname == "/firstCode/FirstBlog/index.html") {
      $(".button-previous").attr("href", "/firstCode/FirstBlog/content2.html");
    }
    else {
      if (window.location.pathname == "/firstCode/FirstBlog/content2.html") {
        $(".button-previous").attr("href", "/firstCode/FirstBlog/content1.html");
      }
      else {
        if (window.location.pathname == "/firstCode/FirstBlog/content1.html") {
          $(".button-previous").attr("href", "/firstCode/FirstBlog/index.html");
        }
      }
    }
  });
});
