(function($) {
  $.fn.hideParagraphs = function(options) {
    var defaults = {
      show: 1,
      show_text: "Show more",
      hide_text: "Hide"
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
        var link = $("<a class='hp-links' href='#'>" + options.show_text + "</a>");
        $(this).append("<p></p>").append(link);

        link.click(function() {
          if( $(this).html() == options.show_text ) {
            $(this).html(options.hide_text);
            invisible.show();
          }
          else {
            $(this).html(options.show_text);
            invisible.hide();
          }
        });
      }
    );
  };
})(jQuery);
