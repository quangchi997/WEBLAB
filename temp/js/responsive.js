$(document).ready(function () {
    console.log("📱 Responsive script loaded");


    $(".humberger__open").on("click", function () {
        $(".humberger__menu__wrapper, .humberger__menu__overlay").addClass("active");
    });

    $(".humberger__menu__overlay").on("click", function () {
        $(".humberger__menu__wrapper, .humberger__menu__overlay").removeClass("active");
    });

    function updateLayout() {
        let w = $(window).width();

        if (w < 768) {
            console.log("📲 Giao diện mobile");
            $(".header__cart__price").hide(); 
            $(".hero__search__phone").hide();
        } else {
            $(".header__cart__price").show();
            $(".hero__search__phone").show();
        }
    }

    updateLayout();

    $(window).on("resize", updateLayout);
});
