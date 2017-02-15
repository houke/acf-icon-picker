<?php
/*
Plugin Name: Advanced Custom Fields: Icon Selector
Plugin URI: https://github.com/houke/acf-icon-selector
Description: Allows you to pick an icon from a predefined list
Version: 1.0.0
Author: Houke de Kwant
Author URI: ttps://github.com/houke/
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
GitHub Plugin URI: https://github.com/houke/acf-icon-selector
GitHub Branch: master
*/

if( ! defined( 'ABSPATH' ) ) exit;

if( !class_exists('acf_plugin_icon_selector') ) :

class acf_plugin_icon_selector {

	function __construct() {

		$this->settings = array(
			'version'	=> '1.0.0',
			'url'		=> plugin_dir_url( __FILE__ ),
			'path'		=> plugin_dir_path( __FILE__ )
		);

		add_action('acf/include_field_types', 	array($this, 'include_field_types'));

	}

	function include_field_types( $version = false ) {
		include_once('fields/acf-icon_selector-v5.php');
	}

}

new acf_plugin_icon_selector();

endif;
