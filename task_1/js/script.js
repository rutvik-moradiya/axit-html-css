$(document).ready(function() {
    var slideIndex = 1;
    displaySlide(slideIndex);

    $(".previous").click(function() {
        debugger;
        var n = -1;
        displaySlide(slideIndex += n);

    });
    $(".next").click(function() {
        var n = -1;
        displaySlide(slideIndex += n);

    });
    $(document).ready(function() {
            $(".footerSquare").click(function() {
                var n = 1;
                displaySlide(slideIndex = n);

            });

        }),

        function displaySlide(n) {
            debugger;

            var totalSlide = $('.slide');
            var totalSuqare = $('.footerSquare');

            if (n > totalSlide.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = totalSlide.length;
            }
            for (var i = 0; i < totalSlide.length; i++) {
                totalSlide[i].style.displaySlide = "none";
            }
            for (var i = 0; i < totalSuqare.length; i++) {
                totalSuqare[i].classname = totalSuqare[i].classname.replace("active", "");
            }
            totalSlide[slideIndex - 1].style.displaySlide = "block";
            totalSuqare[slideIndex - 1].classname += "active";
        }
});