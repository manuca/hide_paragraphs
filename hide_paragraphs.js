(function($) {
  $.fn.hideParagraphs = function(options) {
    var defaults = {
      show: 1,
      show_text: "Show more",
      hide_text: "Hide",
      link_class: "hp-links",
      transition_duration: 50,
      limit_first: null
    };

    var options = $.extend(defaults, options);

    function shouldTruncateFirst($p) {
      return options.limit_first && ($p.first().html().length > options.limit_first);
    }

    function hideParagraph($p) {
      return ($p.length > options.show) || shouldTruncateFirst($p);
    }

    function truncateFirst($p) {
      var text = $p.first().html();
      var split = text.indexOf(' ', options.limit_first);

      var head = text.substring(0, split);
      // var tail = text.substring(split, text.length - 1);
      $p.first().html(head + "&hellip;");
    }

    return this.each(
      function() {
        var $container = $(this);
        var $p = $(this).children("p");

        if (!hideParagraph($p)) {
          return;
        }

        if (shouldTruncateFirst($p)) {
          truncateFirst($p);
        }

        var visible    = $p.slice(0, options.show);
        var invisible  = $p.slice(options.show);
        invisible.hide();
        var link = $("<a href='#'>" + options.show_text + "</a>").
          addClass(options.link_class);
        $container.append(link.wrap("<p class='hp-link-container'></p>").parent());

        link.click(function() {
          if( $(this).html() == options.show_text ) {
            $(this).html(options.hide_text);
            $container.addClass("hp-is-extended");
            invisible.show(options.transition_duration);
          }
          else {
            $(this).html(options.show_text);
            invisible.hide(options.transition_duration);
            $container.removeClass("hp-is-extended");
          }
          return false;
        });
      }
    );
  };
})(jQuery);
