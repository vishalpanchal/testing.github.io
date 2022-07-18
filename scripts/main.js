/*Browser detection script start*/
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version =
            this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) ||
            "Unknown";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(
                dataString.substring(index + this.versionSearchString.length + 1)
            );
        }
    },

    dataBrowser: [{
            string: navigator.userAgent,
            subString: "Edge",
            identity: "ms-edge",
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "explorer",
        },
        {
            string: navigator.userAgent,
            subString: "Trident",
            identity: "explorer",
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "firefox",
        },
        {
            string: navigator.userAgent,
            subString: "Opera",
            identity: "opera",
        },
        {
            string: navigator.userAgent,
            subString: "OPR",
            identity: "opera",
        },

        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "chrome",
        },
        {
            string: navigator.userAgent,
            subString: "Safari",
            identity: "safari",
        },
    ],
};

/* Waypoint script*/
$(window).on("load", function() {
    function onScrollInit(items, trigger) {
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr("data-os-animation"),
                osAnimationDelay = osElement.attr("data-os-animation-delay");

            osElement.css({
                "-webkit-animation-delay": osAnimationDelay,
                "-moz-animation-delay": osAnimationDelay,
                "animation-delay": osAnimationDelay,
            });

            var osTrigger = trigger ? trigger : osElement;

            osTrigger.waypoint(
                function() {
                    osElement.addClass("animated").addClass(osAnimationClass);
                }, {
                    triggerOnce: true,
                    offset: "90%",
                }
            );
        });
    }
    onScrollInit($(".os-animation"));
    onScrollInit($(".staggered-animation"), $(".staggered-animation-container"));
});

$(document).ready(function() {
    BrowserDetect.init();
    $("body").addClass(
        BrowserDetect.browser + " " + BrowserDetect.browser + BrowserDetect.version
    );
    //$('#experience').modal('show')
    /* lazy loads elements with default selector as ".lozad" - Lazy loading Start
    const observer = lozad();
    observer.observe();
    /* End */

    $(".menu").on("click", function() {
        $('.nav').slideToggle();
    })

    $(".down-arw a").on("click", function() {
        $("html,body").animate({
            scrollTop: $(".intro").offset().top,
        },
        700
    );
    })
    

    $(".feature-owl").owlCarousel({
        nav: false,
        dots: false,
        items: 3,
        loop: false,
        responsive: {
            1000: {
                items: 3
            },
            600: {
                items: 3
            },
            0: {
                items: 1,
                stagePadding: 70
            },
        },
    });

    $(".testimonial-owl").owlCarousel({
        nav: true,
        dots: false,
        items: 1,
        loop: false
    });


});