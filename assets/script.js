var timeBlockNine = document.getElementById("hr9am");
var timeBlockTen = document.getElementById("hr10am");
var timeBlockEleven = document.getElementById("hr11am");
var timeBlockTwelve = document.getElementById("hr12pm");
var timeBlockOne = document.getElementById("hr1pm");
var timeBlockTwo = document.getElementById("hr2pm");
var timeBlockThree = document.getElementById("hr3pm");
var timeBlockFour = document.getElementById("hr4pm");
var timeBlockFive = document.getElementById("hr5pm");
var timeBlockSix = document.getElementById("hr6pm");


// When 9 am save button is clicked save text in the 9am hour block 
document.getElementById("9am").addEventListener("click", function(event) {
    event.preventDefault();
    var hrNineText = timeBlockNine.innerHTML;
    if (timeBlockNine.innerHTML === "") {
        alert("Please add something to save");

    }
    else {
        var blockNineTask = {
            hour: "9 am",
            text: hrNineText,

        }
        localStorage.setItem("blockNineTask", JSON.stringify(blockNineTask))

    }
})

var blockNineTask = localStorage.getItem("blockNineTask");

if (blockNineTask) {

    var savedTask = JSON.parse(localStorage.getItem("blockNineTask"));
    timeBlockNine.innerText = savedTask.text;

}
else {

}

document.getElementById("10am").addEventListener("click", function(event) {
    event.preventDefault();
    var hrTenText = timeBlockTen.innerHTML;
    if (timeBlockTen.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTenTask = {
            hour: "10 am",
            text: hrTenText,
        }
        localStorage.setItem("blockTenTask", JSON.stringify(blockTenTask));
    }
})

var blockTenTask = localStorage.getItem("blockTenTask");

if (blockTenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTenTask"));
    timeBlockTen.innerText = savedTask.text;
}
else {

}

document.getElementById("11am").addEventListener("click", function(event) {
    event.preventDefault();
    var hrElevenText = timeBlockEleven.innerHTML;
    if (timeBlockEleven.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockElevenTask = {
            hour: "11 am",
            text: hrElevenText,
        }
        localStorage.setItem("blockElevenTask", JSON.stringify(blockElevenTask));
    }
})

var blockElevenTask = localStorage.getItem("blockElevenTask");

if (blockElevenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockElevenTask"));
    timeBlockEleven.innerText = savedTask.text;
}
else {

}

document.getElementById("12pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrTwelveText = timeBlockTwelve.innerHTML;
    if (timeBlockTwelve.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTwelveTask = {
            hour: "12 pm",
            text: hrTwelveText,
        }
        localStorage.setItem("blockTwelveTask", JSON.stringify(blockTwelveTask));
    }
})

var blockTwelveTask = localStorage.getItem("blockTwelveTask");

if (blockTwelveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwelveTask"));
    timeBlockTwelve.innerText = savedTask.text;
}
else {

}

document.getElementById("1pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrOneText = timeBlockOne.innerHTML;
    if (timeBlockOne.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockOneTask = {
            hour: "1 pm",
            text: hrOneText,
        }
        localStorage.setItem("blockOneTask", JSON.stringify(blockOneTask));
    }
})

var blockOneTask = localStorage.getItem("blockOneTask");

if (blockOneTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockOneTask"));
    timeBlockOne.innerText = savedTask.text;
}
else {

}

document.getElementById("2pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrTwoText = timeBlockTwo.innerHTML;
    if (timeBlockTwo.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTwoTask = {
            hour: "2 pm",
            text: hrTwoText,
        }
        localStorage.setItem("blockTwoTask", JSON.stringify(blockTwoTask));
    }
})

var blockTwoTask = localStorage.getItem("blockTwoTask");

if (blockTwoTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwoTask"));
    timeBlockTwo.innerText = savedTask.text;
}
else {

}

document.getElementById("3pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrThreeText = timeBlockThree.innerHTML;
    if (timeBlockThree.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockThreeTask = {
            hour: "3 pm",
            text: hrThreeText,
        }
        localStorage.setItem("blockThreeTask", JSON.stringify(blockThreeTask));
    }
})

var blockThreeTask = localStorage.getItem("blockThreeTask");

if (blockThreeTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockThreeTask"));
    timeBlockThree.innerText = savedTask.text;
}
else {

}

document.getElementById("4pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrFourText = timeBlockFour.innerHTML;
    if (timeBlockFour.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockFourTask = {
            hour: "4 pm",
            text: hrFourText,
        }
        localStorage.setItem("blockFourTask", JSON.stringify(blockFourTask));
    }
})

var blockFourTask = localStorage.getItem("blockFourTask");

if (blockFourTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFourTask"));
    timeBlockFour.innerText = savedTask.text;
}
else {

}

document.getElementById("5pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrFiveText = timeBlockFive.innerHTML;
    if (timeBlockFive.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockFiveTask = {
            hour: "5 pm",
            text: hrFiveText,
        }
        localStorage.setItem("blockFiveTask", JSON.stringify(blockFiveTask));
    }
})

var blockFiveTask = localStorage.getItem("blockFiveTask");

if (blockFiveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFiveTask"));
    timeBlockFive.innerText = savedTask.text;
}
else {

}

document.getElementById("6pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hrSixText = timeBlockSix.innerHTML;
    if (timeBlockSix.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockSixTask = {
            hour: "6 pm",
            text: hrSicText,
        }
        localStorage.setItem("blockSixTask", JSON.stringify(blockSixTask));
    }
})

var blockSixTask = localStorage.getItem("blockSixTask");

if (blockSixTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockSixTask"));
    timeBlockSix.innerText = savedTask.text;
}
else {

}



