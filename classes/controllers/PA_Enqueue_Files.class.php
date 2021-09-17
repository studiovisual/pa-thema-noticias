<?php 

class PA_Enqueue_Files {
	public function __construct(){
		add_action('wp_enqueue_scripts', [$this, 'RegisterChildAssets']);
	}

	public function RegisterChildAssets() {
		wp_enqueue_style( 'pa-child-style', get_stylesheet_uri());
		wp_enqueue_script('pa-child-script', get_stylesheet_directory_uri() . '/assets/js/script.min.js', array(), false, true);

		wp_localize_script(
			'pa-child-script',
			'pa',
			array(
				'ajaxurl' => admin_url('admin-ajax.php')
			)
		);
	}
}
new PA_Enqueue_Files();