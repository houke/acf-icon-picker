(function($) {
  var active_item;

  jQuery(document).on("click", "li[data-svg]", function() {
    var val = jQuery(this).data("svg");
    active_item.find("input").val(val);
    active_item
      .find(".acf-icon-picker__svg")
      .html('<img src="' + jQuery(this).find("img").attr("src") + '" alt=""/>');
    jQuery(".acf-icon-picker__popup-holder").remove();

    console.log(
      active_item.parents(".acf-icon-picker").find(".acf-icon-picker__remove")
    );

    active_item
      .parents(".acf-icon-picker")
      .find(".acf-icon-picker__remove")
      .addClass("acf-icon-picker__remove--active");
  });
  jQuery(document).on("click", ".acf-icon-picker__popup-holder", function(e) {
    e.preventDefault();
    e.stopPropagation();
    active_item = "";
    jQuery(".acf-icon-picker__popup-holder").remove();
  });

  function initialize_field($el) {
    $el.find(".acf-icon-picker__img").on("click", function(e) {
      e.preventDefault();
      active_item = $(this);
      if (iv.svgs.length == 0) {
        var list = "<p>" + iv.no_icons_msg + "</p>";
      } else {
        var list = `<ul>`;
        jQuery(iv.svgs).each(function() {
          var svg = jQuery(this)[0];
          list += `<li data-svg="${svg["name"]}">
						<div class="acf-icon-picker__popup-svg">
							<img src="${iv.path}${svg["icon"]}" alt=""/>
						</div>
						<span>${svg["name"].replace(/[-_]/g, " ")}</span>
					</li>`;
        });
        list += `</ul>`;
      }

      jQuery("body").append(
        `<div class="acf-icon-picker__popup-holder">
				<div class="acf-icon-picker__popup">
					${list}
				</div>
			</div>`
      );
    });

    // show the remove button if there is an icon selected
    if ($el.find("input").val().length != 0) {
      $el
        .find(".acf-icon-picker__remove")
        .addClass("acf-icon-picker__remove--active");
    }

    $el.find(".acf-icon-picker__remove").on("click", function(e) {
      e.preventDefault();
      var parent = $(this).parents(".acf-icon-picker");
      parent.find("input").val("");
      parent
        .find(".acf-icon-picker__svg")
        .html('<span class="acf-icon-picker__svg--span">+</span>');

      parent
        .find(".acf-icon-picker__remove")
        .removeClass("acf-icon-picker__remove--active");
    });
  }

  if (typeof acf.add_action !== "undefined") {
    acf.add_action("ready append", function($el) {
      acf.get_fields({ type: "icon_picker" }, $el).each(function() {
        initialize_field($(this));
      });
    });
  }
})(jQuery);
