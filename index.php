<?php
/**
 * Plugin Name: Custom Blocks
 * Plugin URI: http://wordpress.org/plugins/custom-blocks/
 * Description: Demo plugin to register custom gutenberg blocks
 * Author: Imran Sayed
 * Version: 1.0.0
 * Author URI: https://codeytek.com
 * text-domain: custom-blocks
 *
 * @package custom-blocks
*/

defined( 'ABSPATH' ) || exit;
define( 'GTCB_BLOCKS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'GTCB_BLOCKS_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );

include 'custom-functions.php';
