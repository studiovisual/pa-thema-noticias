<?php

use WordPlate\Acf\Location;
use WordPlate\Acf\ConditionalLogic;
use WordPlate\Acf\Fields\ButtonGroup;
use WordPlate\Acf\Fields\Relationship;

class PaAcfHomeFields {

    public function __construct() {
        add_action('init', [$this, 'createACFFields']);
    }

    function createACFFields() {
        register_extended_field_group([
            'title' => 'Destaques',
            'style' => 'default',
            'fields' => [
                ButtonGroup::make('Modelo', 'featured_layout')
                    ->choices([
                        1 => '1 post',
                        2 => '2 posts',
                        3 => '3 posts',
                    ])
                    ->defaultValue(1),
                $this->relationshipField(1),
                $this->relationshipField(2),
                $this->relationshipField(3),
            ],
            'location' => [
                Location::if('page_template', 'page-front-page.blade.php'),
            ]
        ]);
    }

    protected function relationshipField($count = 1) {
		$count = !empty($count) ? $count : 1;

		return 
			Relationship::make('Posts em destaque', "featured_items_{$count}")
				->instructions("Selecione até {$count} post" . ($count > 1 ? 's' : '') ." de destaque")
				->postTypes(['post'])
				->filters([
					'search',
					'taxonomy'
				])
				->elements(['featured_image'])
				->min(1)
				->max($count)
				->returnFormat('id')
				->required()
				->conditionalLogic([
					ConditionalLogic::if('featured_layout')->equals($count)
				]);
	}

}

$PaAcfHomeFields = new PaAcfHomeFields();
