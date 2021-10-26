<?php

namespace Blocks\PAListPosts;

use Blocks\Block;
use Fields\MoreContent;
use WordPlate\Acf\Fields\Relationship;
use WordPlate\Acf\Fields\Text;

/**
 * Class PAListPress
 * @package Blocks\PAListPosts
 */
class PAListPress extends Block {

    public function __construct() {
		// Set block settings
        parent::__construct([
            'title' 	  => __('IASD - List press', 'iasd'),
            'description' => __('List press posts', 'iasd'),
            'category' 	  => 'pa-adventista',
			'keywords' 	  => ['list', 'posts', 'press'],
			'icon' 		  => 'megaphone',
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
				Text::make(__('Title', 'title'))
					->defaultValue(__('IASD - List press', 'iasd')),

				Relationship::make('Posts', 'items')
					->postTypes(['press'])
					->filters([
						'search',
						'taxonomy'
					])
					->elements(['featured_image'])
					->min(1)
					->returnFormat('id')
					->required()
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