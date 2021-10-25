<?php

namespace Blocks\PAListColumnists;

use Blocks\Block;
use Fields\MoreContent;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\User;

/**
 * Class PAListColumnists
 * @package Blocks\PAListColumnists
 */
class PAListColumnists extends Block {

    public function __construct() {
		// Set block settings
        parent::__construct([
            'title' 	  => __('IASD - List columnists', 'iasd'),
            'description' => __('List columnists', 'iasd'),
            'category' 	  => 'pa-adventista',
			'keywords' 	  => ['list', 'posts'],
			'icon' 		  => 'admin-users',
        ]);
    }
	
	/**
	 * setFields Register ACF fields with WordPlate/Acf lib
	 *
	 * @return array Fields array
	 */
	protected function setFields(): array {
		return array_merge(
			[
				Text::make('Título', 'title')
					->defaultValue(__('IASD - List columnists', 'iasd')),

				User::make(__('Columnists', 'iasd'), 'items')
					->roles([
						'columnist',
					])
					->allowMultiple()
					->returnFormat('id')
			],
			MoreContent::make()
		);
	}
	    
    /**
     * with Inject fields values into template
     *
     * @return array
     */
    public function with(): array {
        return [
            'title'  	   => get_field('title'),
			'items' 	   => get_field('items'),
			'enable_link'  => get_field('enable_link'),
			'link'    	   => get_field('link'),
        ];
    }

}