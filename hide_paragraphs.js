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

    function truncatePar($p) {
      var text = $p.html();
      var split = text.indexOf(' ', options.limit_first);

      var head = text.substring(0, split);
      var tail = text.substring(split, text.length - 1);

      // $p.first().html(head + "&hellip;");
      return [head, tail];
    }

    return this.each(
      function() {
        var $container = $(this);
        var $p = $(this).children("p");
        var p_head = "", p_tail = "";
        var $first_p;

        if (!hideParagraph($p)) {
          return;
        }

        if (shouldTruncateFirst($p)) {
          $first_p = $p.first();
          var parts = truncatePar($first_p);

          head = parts[0];
          tail = parts[1];
        }

        var visible    = $p.slice(0, options.show);
        var invisible  = $p.slice(options.show);

        invisible.hide();

        if ($first_p) {
          $first_p.html(head + "&hellip;");
        }

        var link = $("<a href='#'>" + options.show_text + "</a>").
        addClass(options.link_class);
        $container.append(link.wrap("<p class='hp-link-container'></p>").parent());

        link.click(function() {
          if( $(this).html() == options.show_text ) {
            $(this).html(options.hide_text);
            $container.addClass("hp-is-extended");
            invisible.show(options.transition_duration);

            if ($first_p) {
              $first_p.html(head + tail);
            }
          }
          else {
            $(this).html(options.show_text);
            invisible.hide(options.transition_duration);
            $container.removeClass("hp-is-extended");

            if ($first_p) {
              $first_p.html(head + "&hellip;");
            }
          }
          return false;
        });
      }
    );
  };
})(jQuery);
