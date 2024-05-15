$(window).on("load", function() {
        var e, o = $(".fv__slider"),
            t = window.innerWidth,
            n = $(this).scrollTop();
        o.on("init", function(e, i) {
                if (-1 !== window.navigator.userAgent.toLowerCase().indexOf("Trident") || t < 768) {
                    (new TimelineMax).to($(".loading .loading__logo"), .5, {
                        opacity: 1
                    }).to($(".loading__logo"), .5, {
                        opacity: 0
                    }, "+=0.3").to($(".loading"), .5, {
                        opacity: 0,
                        onComplete: function() {
                            o.slick("slickSetOption", "autoplay", !0, !0),
                                setTimeout(function() {
                                    $(".loading").remove()
                                }, 500)
                        }
                    }, "+=0.1").to($(".fv__slider"), .9, {
                        opacity: 1
                    }, "-=0.2").from($(".header"), .2, {
                        yPercent: -100,
                        onComplete: function() {
                            $(".header").css("transform", "inherit")
                        }
                    }, "-=0.6").to($(".fv__copy"), .4, {
                        opacity: 1
                    }, "-=0.3").to($(".fv__scroll"), .7, {
                        opacity: 1
                    }, "-=0.1").to($(".bodywrap"), .4, {
                        opacity: 1
                    }, "-=0.8")
                } else {
                    if (!(n < 100))
                        return;
                    (new TimelineMax).to($(".loading .loading__logo"), .5, {
                        opacity: 1
                    }).to($(".loading__logo"), .5, {
                        opacity: 0
                    }, "+=0.3").to($(".loading__inr"), .4, {
                        xPercent: 100,
                        ease: Power2.easeOut,
                        onComplete: function() {
                            o.slick("slickSetOption", "autoplay", !0, !0),
                                setTimeout(function() {
                                    $(".loading").remove()
                                }, 500)
                        }
                    }, "+=0.1").to($(".fv__slider"), .9, {
                        opacity: 1
                    }, "-=0.2").from($(".header"), .2, {
                        yPercent: -100
                    }, "-=0.6").to($(".fv__copy"), .4, {
                        opacity: 1
                    }, "-=0.3").to($(".fv__scroll"), .7, {
                        opacity: 1
                    }, "-=0.1")
                }
            }).slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                appendArrows: $(".fv__slider_pager"),
                dots: !1,
                appendDots: $(".fv__slider_dots"),
                fade: !0,
                speed: 2e3,
                autoplaySpeed: 1e4,
                autoplay: !0,
                easing: "swing",
                pauseOnHover: !1,
                pauseOnFocus: !1,
                draggable: !1
            }).on({
                beforeChange: function(e, i, o, t) {
                    $(".slick-slide", this).eq(o).addClass("preve-slide"),
                        $(".slick-slide", this).eq(t).addClass("slide-animation")
                },
                afterChange: function() {
                    $(".preve-slide", this).removeClass("preve-slide slide-animation")
                }
            }),
            o.find(".slick-slide").eq(0).addClass("slide-animation");
        var i = $(".bar");

        function a() {
            i.css({
                    height: "0%"
                }),
                clearTimeout(e),
                percentTime = 0,
                e = setInterval(s, 10)
        }

        function s() {
            percentTime += .2,
                i.css({
                    height: percentTime + "%"
                }),
                100 <= percentTime && (o.slick("slickNext"),
                    a())
        }
        a(),
            100 < n && ($(".loading").animate({
                    opacity: "0"
                }, 200),
                setTimeout(function() {
                    $(".loading").remove()
                }, 800),
                $(".header, .fv__slider, .fv__copy, .fv__scroll, .bodywrap").addClass("in"))
    }),
    $(function() {
        $.ajax({
            url: "/assets/api/instagram.php",
            dataType: "json",
            success: function(e) {
                for (var i = "", o = 0; o < e.length; o++)
                    i += '<li><a href="' + e[o].permalink + '" target="_blank">',
                    i += '<img src="' + e[o].media_url + '">',
                    i += "</a></li>";
                $(".instlist").append(i)
            }
        })
    });