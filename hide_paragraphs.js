(function($) {
  $.fn.hideParagraphs = function(options) {
    var defaults = {
      show: 1,
      show_text: "Show more",
      hide_text: "Hide",
      link_class: "hp-links",
      transition_duration: 0,
      limit_visible_chars: null
    };

    var options = $.extend(defaults, options);

    function shouldTruncateChars($p) {
      return options.limit_visible_chars && ($p.length == 1) && ($p.html().length > options.limit_visible_chars);
    }

    function hideParagraph($p) {
      return ($p.length > options.show) || shouldTruncateChars($p);
    }

    function truncatePar($p) {
      var text = $p.html();
      var split = text.indexOf(' ', options.limit_visible_chars);

      var head = text.substring(0, split);
      var tail = text.substring(split, text.length - 1);

      return [head, tail];
    }

    return this.each(
      function() {
        var $container = $(this);
        var $p = $(this).children("p");
        var p_head = "", p_tail = "";
        var $truncated_p;

        if (!hideParagraph($p)) {
          return;
        }

        var $visible    = $p.slice(0, options.show);
        var $invisible  = $p.slice(options.show);

        if (shouldTruncateChars($visible.last())) {
          $truncated_p = $visible.last();
          var parts = truncatePar($truncated_p);

          head = parts[0];
          tail = parts[1];
        }

        $invisible.hide();

        if ($truncated_p) {
          $truncated_p.html(head + "&hellip;");
        }

        var link = $("<a href='#'>" + options.show_text + "</a>").
        addClass(options.link_class);
        $container.append(link.wrap("<p class='hp-link-container'></p>").parent());

        link.click(function() {
          if( $(this).html() == options.show_text ) {
            $(this).html(options.hide_text);
            $container.addClass("hp-is-extended");

            $invisible.show(options.transition_duration);

            if ($truncated_p) {
              $truncated_p.html(head + tail);
            }

          }
          else {
            $(this).html(options.show_text);
            $invisible.hide(options.transition_duration);
            $container.removeClass("hp-is-extended");

            if ($truncated_p) {
              $truncated_p.html(head + "&hellip;");
            }
          }
          return false;
        });
      }
    );
  };
})(jQuery);
