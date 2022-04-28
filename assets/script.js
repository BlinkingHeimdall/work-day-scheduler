var timeBlockNine = document.getElementById("hr9am");
var timeBlockTen = document.getElementById("hr10am");
var timeBlockEleven = document.getElementById("hr11am");
var timeBlockTwelve = document.getElementById("hr12pm");
var timeBlockOne = document.getElementById("hr1pm");
var timeBlockTwo = document.getElementById("hr2pm");
var timeBlockThree = document.getElementById("hr3pm");
var timeBlockFour = document.getElementById("hr4pm");
var timeBlockFive = document.getElementById("hr5pm");

$(".textarea").on("click", function() {
    var text= $(this)
    .text()
    .trim();
    console.log(text);

    var newDueItem = $("<textarea>")
        .addClass("textarea")
        .val(text);
        $(this).replaceWith(newDueItem);
        newDueItem.trigger("focus");
})

