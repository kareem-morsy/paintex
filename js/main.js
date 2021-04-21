$('#car4').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow1.svg'/>", "<img src='images/arrow2.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('#car3').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow1.svg'/>","<img src='images/arrow2.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


$('#car5').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow2.svg'/>", "<img src='images/arrow1.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});


$('#car6').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow1.svg'/>", "<img src='images/arrow2.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 3
        }
    }

});


$('#car7').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow2.svg'/>", "<img src='images/arrow1.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});


$('#car8').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow2.svg'/>", "<img src='images/arrow1.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});


$('#car15').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<img src='images/arrow2.svg'/>", "<img src='images/arrow1.svg'/>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.click(function() {
    
    $('html, body').animate({
        scrollTop: 0
    }, "slow");
});


$.fn.BeerSlider = function (options) {
    options = options || {};
    return this.each(function () {
        new BeerSlider(this, options);
    });
};
$(".beer-slider").each(function (index, el) {
    $(el).BeerSlider({
        start: $(el).data("start")
    })

});

