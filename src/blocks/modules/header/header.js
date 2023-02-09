import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;
import fancybox from "@fancyapps/fancybox";
window.fancybox = $.fancybox;

$("a.scroll").on("click", function () {
    let link = $(this);
    
    $("html, body").animate({
        scrollTop: scrollTo = $(link.attr("href")).offset().top + "px"
    }, {
        duration: 800
    });
    return false;
});

