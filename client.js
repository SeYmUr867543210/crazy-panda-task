let changeColor = false;
let changeBackground = false;

colorBtn.addEventListener("click", function () {
    changeColor = true;
    changeBackground = false;
})
backgroundColorBtn.addEventListener("click", function () {
    changeBackground = true;
    changeColor = false;
})


$(function () {
    $('#redColor').slider({
        range: 'max',
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            if (changeColor) {
                $('#textarea').css({ "color": "red"});
            } else if (changeBackground) {
                $('#textarea').css({ "background": "red"});
            }
        }
    });
});
$(function () {
    $('#greenColor').slider({
        range: 'max',
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            if (changeColor) {
                $('#textarea').css({ "color": "green"});
            } else if (changeBackground) {
                $('#textarea').css({ "background": "green"});
            }
        }
    });

});
$(function () {
    $('#blueColor').slider({
        range: 'max',
        min: 0,
        max: 100,
        value: 50,
        slide: function (event, ui) {
            if (changeColor) {
                $('#textarea').css({ "color": "blue"});
            } else if (changeBackground) {
                $('#textarea').css({ "background": "blue"});
            }
        }
    });
});