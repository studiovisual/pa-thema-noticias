<?php

use Extended\LocalData;
use WordPlate\Acf\Location;
use WordPlate\Acf\ConditionalLogic;
use WordPlate\Acf\Fields\ButtonGroup;
use WordPlate\Acf\Fields\Taxonomy;

class PaAcfHomeFields
{

    public function __construct()
    {
        add_action('init', [$this, 'init']);
    }

    function init()
    {
        $this->createACFFields('page-front-page.blade.php', 'post', ['xtt-pa-sedes', 'xtt-pa-editorias', 'xtt-pa-projetos']);
        $this->createACFFields('page-press-room.blade.php', 'press', []);
        $this->createACFFieldsContext();  
    }

    function createACFFields($template, $postType, $taxonomies)
    {
        register_extended_field_group([
            'title' => 'Destaques',
            'key'   => "featured_{$postType}",
            'style' => 'default',
            'fields' => [
                ButtonGroup::make('Modelo', 'featured_layout')
                    ->instructions("Essa seleção irá influenciar na quantidade de itens exibidos na página.")
                    ->choices([
                        1 => '1 post',
                        2 => '2 posts',
                        3 => '3 posts',
                    ])
                    ->defaultValue(1),
                LocalData::make(__('Featured posts', 'iasd'), "featured_items")
                    ->instructions("")
                    ->postTypes([$postType])
                    ->initialLimit(10)
                    ->filterTaxonomies($taxonomies)
                    ->manualItems(false)
                    ->limitFilter(false)
            ],
            'location' => [
                Location::if('page_template', $template),
            ]
        ]);
    }

    function createACFFieldsContext(){
        register_extended_field_group([
            'title' => 'Context',
            'key'   => "context",
            'style' => 'default',
            'fields' => [
                Taxonomy::make('Sede regional', 'context')
                    ->instructions('Selecione o contexto dos conteúdos da página.')
                    ->taxonomy('xtt-pa-sedes')
                    ->appearance('select')
                    ->required()
                    ->returnFormat('object')
            ],
            'location' => [
                Location::if('page_template', 'page-front-page.blade.php'),
            ]
        ]);
    }

}

$PaAcfHomeFields = new PaAcfHomeFields();
