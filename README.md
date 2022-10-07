# ACF Icon Selector Field

Allows you to create an 'icon-picker' acf-field.

---

## Please note

I am no longer developing this plugin myself, but will still be accepting PRs.

## Description

Add the svg icons you want to be available in your theme to an acf folder inside an img folder in your theme. The field returns the name of the svg.

## Compatibility

This ACF field type is compatible with:

[x] ACF 6
[x] ACF 5

## Screenshots

![Icon Picker](https://raw.githubusercontent.com/houke/acf-icon-picker/master/screenshots/example.png)

## Installation

### via Composer
1. Add a line to your repositories array: `{ "type": "git", "url": "https://github.com/houke/acf-icon-picker" }`
2. Add a line to your require block: `"houke/acf-icon-picker": "dev-master"`
3. Run: composer update

### Manually
1. Copy the `acf-icon-picker` folder into your `wp-content/plugins` folder
2. Activate the Icon Selector plugin via the plugins admin page
3. Create a new field via ACF and select the Icon Selector type

## Filters

Use the below filters to override the default icon folder, path, and / or URL:

```php
// modify the path to the icons directory
add_filter( 'acf_icon_path_suffix', 'acf_icon_path_suffix' );

function acf_icon_path_suffix( $path_suffix ) {
    return 'assets/img/icons/';
}

// modify the path to the above prefix
add_filter( 'acf_icon_path', 'acf_icon_path' );

function acf_icon_path( $path_suffix ) {
    return plugin_dir_path( __FILE__ );
}

// modify the URL to the icons directory to display on the page
add_filter( 'acf_icon_url', 'acf_icon_url' );

function acf_icon_url( $path_suffix ) {
    return plugin_dir_url( __FILE__ );
}
```

For Sage/Bedrock edit filters.php:

```php
/// modify the path to the icons directory
add_filter('acf_icon_path_suffix',
  function ( $path_suffix ) {
    return '/assets/images/icons/'; // After assets folder you can define folder structure
  }
);

// modify the path to the above prefix
add_filter('acf_icon_path',
  function ( $path_suffix ) {
    return '/app/public/web/themes/THEME_NAME/resources';
  }
);

// modify the URL to the icons directory to display on the page
add_filter('acf_icon_url',
  function ( $path_suffix ) {
    return get_stylesheet_directory_uri();
  }
);
```

## Changelog

* 1.9.1 - ACF 6 compatibility fix. Thanks to [idflood](https://github.com/houke/acf-icon-picker/pull/30)
* 1.9.0 - Fix issue with Gutenberg preview not updating when removing. Thanks to [cherbst](https://github.com/houke/acf-icon-picker/pull/23)
* 1.8.0 - Fix issue with Gutenberg not saving icon. Thanks to [tlewap](https://github.com/houke/acf-icon-picker/pull/17)
* 1.7.0 - 2 new filters for more control over icon path. Thanks to [benjibee](https://github.com/houke/acf-icon-picker/pull/11)
* 1.6.0 - Performance fix with lots of icons. Thanks to [idflood](https://github.com/houke/acf-icon-picker/pull/9)
* 1.5.0 - Fix issue where searching for icons would break preview if icon name has space
* 1.4.0 - Add filter to change folder where svg icons are stored
* 1.3.0 - Adding close option on modal
* 1.2.0 - Adding search filter input to filter through icons by name
* 1.1.0 - Add button to remove the selected icon when the field is not required
* 1.0.0 - First release
