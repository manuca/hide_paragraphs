(function($) {
  $.fn.hideParagraphs = function(options) {
    var defaults = {
      show: 1,
      show_text: "Show more",
      hide_text: "Hide",
      link_class: "hp-links",
      transition_duration: 400
    };

    var options = $.extend(defaults, options);

    return this.each(
      function() {
        var paragraphs = $(this).children("p");

        if (paragraphs.length <= options.show) {
          return;
        }

        var visible    = paragraphs.slice(0, options.show);
        var invisible  = paragraphs.slice(options.show);
        invisible.hide();
        var link = $("<a href='#'>" + options.show_text + "</a>").
          addClass(options.link_class);
        $(this).append(link.wrap("<p></p>").parent());

        link.click(function() {
          if( $(this).html() == options.show_text ) {
            $(this).html(options.hide_text);
            invisible.show(options.transition_duration);
          }
          else {
            $(this).html(options.show_text);
            invisible.hide(options.transition_duration);
          }
          return false;
        });
      }
    );
  };
})(jQuery);
