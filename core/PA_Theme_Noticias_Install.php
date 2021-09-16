<?php

/**
 * 
 * Bootloader Install
 * 
 */

class PAThemeNoticiasInstall {

  public function __construct() {
    add_action('after_setup_theme', array($this, 'installRoutines'));
	add_action('admin_enqueue_scripts', array($this, 'enqueueAssets'));
	add_action('after_setup_theme', array($this, 'removePostFormats'), 100);
  }

  function installRoutines() {
    /**
     * 
     * FORMATO DE POST
     * 
     */

    $labels = array(
      'name'              => __('Formatos de post'),
      'singular_name'     => __('Formato de post'),
      'search_items'      => __('Procurar formatos de post'),
      'all_items'         => __('Todas os formatos'),
      'edit_item'         => __('Editar formato de post'),
      'update_item'       => __('Atualizar formato de post'),
      'add_new_item'      => __('Adicionar novo formato de post'),
      'new_item_name'     => __('Novo formato de post'),
      'menu_name'         => __('Formatos de post'),
    );
    $args   = array(
		'hierarchical'       => true, // make it hierarchical (like categories)
		'labels'             => $labels,
		'show_ui'            => true,
		'show_admin_column'  => true,
		'show_in_quick_edit' => false,
		'query_var'          => true,
		'show_in_rest'       => true, // add support for Gutenberg editor
		'rewrite'            => ['slug' => 'xtt-pa-format'],
		'capabilities' 		  => array(
			'edit_terms' 	  => false,
			'delete_terms'    => false,
		),
    );

    register_taxonomy('xtt-pa-format', ['post'], $args);
  }

  	function enqueueAssets() {
		global $current_screen;

		if($current_screen->id != 'post' && $current_screen->id != 'edit-post')
			return;

		wp_enqueue_script(
			'adventistas-noticias-admin', 
			get_stylesheet_directory_uri() . '/assets/scripts/admin.js', 
			array('wp-i18n', 'wp-blocks', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post', 'lodash'), 
			null, 
			false
		);
	}

  function removePostFormats() {
	remove_theme_support('post-formats');
  }

}

new PAThemeNoticiasInstall();
