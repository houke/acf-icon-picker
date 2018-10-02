# ACF Icon Selector Field

Allows you to create an 'icon-picker' acf-field.

---

## Description

Add the svg icons you want to be available in your theme to an acf folder inside an img folder in your theme. The field returns the name of the svg.

## Compatibility

This ACF field type is compatible with:
[x] ACF 5

## Screenshots

![Icon Picker](https://raw.githubusercontent.com/houke/acf-icon-picker/master/screenshots/example.png)

## Installation

1. Copy the `acf-icon-picker` folder into your `wp-content/plugins` folder
2. Activate the Icon Selector plugin via the plugins admin page
3. Create a new field via ACF and select the Icon Selector type

## Filters

Use this filter if you want to override the default icon folder.

    add_filter( 'acf_icon_path_suffix', 'acf_icon_path_suffix' );

    function acf_icon_path_suffix( $path_suffix ) {
        return 'assets/img/icons/';
    }

## Changelog

* 1.6.0 - Performance fix with lots of icons. Thanks to ![idflood](https://github.com/houke/acf-icon-picker/pull/9)
* 1.5.0 - Fix issue where searching for icons would break preview if icon name has space
* 1.4.0 - Add filter to change folder where svg icons are stored
* 1.3.0 - Adding close option on modal
* 1.2.0 - Adding search filter input to filter through icons by name
* 1.1.0 - Add button to remove the selected icon when the field is not required
* 1.0.0 - First release
