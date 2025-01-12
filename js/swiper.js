// swiper js for services

(() => {
  $(document).ready(function () {
    (function (e) {
      e.fn.cycle = function (t, s) {
        var a = this.length,
          i = 0,
          n = -1,
          r = this,
          l = e("#main-section #section-services .description .description-tab");
        return setInterval(function () {
          r.eq(n).removeClass(s), l.eq(n).removeClass(s), r.eq(i).addClass(s);
          var t = r.eq(i).offset();
          (t.left -= r.eq(0).offset().left),
            e("#main-section #section-services .nav-tab").animate({
              scrollLeft: t.left,
            }),
            l.eq(i).addClass(s),
            r.eq(i).tab("show"),
            (n = i),
            (i = (i + 1) % a);
        }, t);
      };
    })(jQuery);
    var e = $("#main-section #section-services .nav-tab .nav-item-link").cycle(
      5e3,
      "active"
    );
    $("#main-section #section-services .nav-tab .nav-item-link").click(function () {
      clearInterval(e),
        $("#main-section #section-services .nav-tab .nav-item-link").removeClass("active"),
        $("#main-section #section-services .description .description-tab").removeClass(
          "active"
        ),
        $(this).addClass("active"),
        $("#" + this.getAttribute("aria-controls")).addClass("active"),
        $(this).tab("show");
    });
  });
})();
