<?php

use WordPlate\Acf\Location;
use WordPlate\Acf\ConditionalLogic;
use WordPlate\Acf\Fields\ButtonGroup;
use WordPlate\Acf\Fields\Relationship;

class PaAcfHomeFields {

    public function __construct() {
        add_action('init', [$this, 'init']);
    }

    function init() {
        $this->createACFFields('page-front-page.blade.php', 'post');
        $this->createACFFields('page-press-room.blade.php', 'press');
    }

    function createACFFields($template, $postType) {
        register_extended_field_group([
            'title' => 'Destaques',
            'key'   => "featured_{$postType}",
            'style' => 'default',
            'fields' => [
                ButtonGroup::make('Modelo', 'featured_layout')
                    ->choices([
                        1 => '1 post',
                        2 => '2 posts',
                        3 => '3 posts',
                    ])
                    ->defaultValue(1),
                $this->relationshipField(1, $postType),
                $this->relationshipField(2, $postType),
                $this->relationshipField(3, $postType),
            ],
            'location' => [
                Location::if('page_template', $template),
            ]
        ]);
    }

    protected function relationshipField($count = 1, $postType) {
		$count = !empty($count) ? $count : 1;

		return 
			Relationship::make('Posts em destaque', "featured_items_{$count}")
				->instructions("Selecione até {$count} post" . ($count > 1 ? 's' : '') ." de destaque")
				->postTypes([$postType])
				->filters([
					'search',
					'taxonomy'
				])
				->elements(['featured_image'])
				->max($count)
				->returnFormat('id')
				->conditionalLogic([
					ConditionalLogic::if('featured_layout')->equals($count)
				]);
	}

}

$PaAcfHomeFields = new PaAcfHomeFields();
