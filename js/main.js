// aos animation

function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
aos_init();

$(function () {
  // draggable
  $("#draggable").draggable();

  // sortable
  $("#sortable").sortable();

  // accordion
  $("#accordion").accordion({
    collapsible: true,
  });

  // auto complete
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];

  $("#tags").autocomplete({
    source: availableTags,
  });

  // date picker

  $("#datepicker").datepicker();

  // progressbar
  $("#progressbar").progressbar({
    value: 67,
  });

  // tabs
  $("#tabs").tabs();

  // add class
  $("#button").on("click", function () {
    $("#effect").addClass("newClass", 1000, callback);
  });

  function callback() {
    setTimeout(function () {
      $("#effect").removeClass("newClass");
    }, 1500);
  }

  // color animation
  var state = true;
  $("#add_color").on("click", function () {
    if (state) {
      $("#color_effect").animate(
        {
          backgroundColor: "#aa0000",
          color: "#fff",
        },
        1000
      );
    } else {
      $("#color_effect").animate(
        {
          backgroundColor: "#fff",
          color: "#000",
        },
        1000
      );
    }
    state = !state;
  });

  // show effect

  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 280, height: 185 } };
    }

    // Run the effect
    $("#show").show(selectedEffect, options, 500, callback);
  }

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#show:visible").removeAttr("style").fadeOut();
    }, 1000);
  }

  // Set effect from select menu value
  $("#show_btn").on("click", function () {
    runEffect();
  });

  $("#show").hide();
});

// tooltip
$(document).tooltip();
