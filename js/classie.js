/* ==================================================
            # Magnific popup init
         ===============================================*/
$(".popup-link").magnificPopup({
    type: "image",
    // other options
});

$(".popup-gallery").magnificPopup({
    type: "image",
    gallery: {
        enabled: true,
    },
    // other options
});

$(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
});

$(".magnific-mix-gallery").each(function() {
    var $container = $(this);
    var $imageLinks = $container.find(".item");

    var items = [];
    $imageLinks.each(function() {
        var $item = $(this);
        var type = "image";
        if ($item.hasClass("magnific-iframe")) {
            type = "iframe";
        }
        var magItem = {
            src: $item.attr("href"),
            type: type,
        };
        magItem.title = $item.data("title");
        items.push(magItem);
    });

    $imageLinks.magnificPopup({
        mainClass: "mfp-fade",
        items: items,
        gallery: {
            enabled: true,
            tPrev: $(this).data("prev-text"),
            tNext: $(this).data("next-text"),
        },
        type: "image",
        callbacks: {
            beforeOpen: function() {
                var index = $imageLinks.index(this.st.el);
                if (-1 !== index) {
                    this.goTo(index);
                }
            },
        },
    });
});
// TESTIMONIAL JS START
$(".slick-w").slick({
    dots: false,
    focusOnSelect: false,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add FontAwesome Class
    prevArrow: '<div class="man-wrapper"><div class="slider-arrow arrow slick-next"></div></div>',
    nextArrow: '<div class="man-wrapper-right"><div class="slider-arrow arrow slick-prev"></div> </div>',
    // prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
    // nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
});

$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
});

///////////////////////////////////////////////////////
//                JOBS START
//////////////////////////////////////////////////////

$(document).on("click", ".add-btna", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Layout Planning" name="option[]">' +
        '<a href="" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<input type="text" class="form-control" placeholder="Strategy Planning" name="option[]">' +
    //  ' </div>' +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +

    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-b", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Budgeting Analy.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-c", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Strategic Plann.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-d", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Managing Opera.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-e", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Defining Softw.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-f", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Procurement Plan.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-g", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Supply chain.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div").append(field);
});
$(document).on("click", ".add-btn-h", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="HR Manage.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div-one").append(field);
});
$(document).on("click", ".add-btn-i", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Branding & Mark.." name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div-one").append(field);
});
$(document).on("click", ".add-btn-j", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Strategy Planning" name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div-one").append(field);
});
$(document).on("click", ".add-btn-k", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Insurance Service" name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div-one").append(field);
});
$(document).on("click", ".add-btn-l", function() {
    var field =
        '<div class="main-div">' +
        '<div class="sub-div position-relative">' +
        '<input type="text" class="form-control" placeholder="Strategy Planning" name="option[]">' +
        '<a href="javascript:void(0)" class=" sub-btn"><i class="fa fa-times" aria-hidden="true"></i></a>';
    " </div>" +
    //  '<div class="col-md-4">' +
    //  '<input type="text" class="form-control" placeholder="Value" name="value[]">' +
    //  '</div>' +
    //  '<div class="col-md-4">' +
    //  '<a href="javascript:void(0)" class=" sub-btn">-</a>' +
    //  '</div>' +
    "</div>";

    $(".option-div-one").append(field);
});

$(document).on("click", ".sub-btn", function(e) {
    $(this).parent().parent().remove();
});

//   sticky start
$(function() {
    // document ready
    if ($("#sticky").length) {
        // make sure "#sticky" element exists
        var el = $("#sticky");
        var stickyTop = $("#sticky").offset().top; // returns number
        var stickyHeight = $("#sticky").height();

        $(window).scroll(function() {
            var limit = $("#footer").offset().top - stickyHeight - 100;

            var windowTop = $(window).scrollTop(); // returns number

            if (stickyTop < windowTop) {
                el.css({
                    position: "fixed",
                    top: 50,
                });
            } else {
                el.css("position", "static");
            }

            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff,
                });
            }
        });
    }
});

// new js start
// language js start 
$(function() {
    $('.selectpicker').selectpicker();
});
// Notice News js start 


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
// Notice News js end