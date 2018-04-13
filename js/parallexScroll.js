(function($) {
    $(document).parallex({
        elements: ["#menu", "#service", "#contacts"],
        parallex: [".first-parallex", ".second-parallex"],
        nav: $('#nav'),
        currentClass: "current",
        scrollSpeed: 750
    });
}(jQuery));