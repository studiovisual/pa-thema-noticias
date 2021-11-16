<?php

use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Url;

class PaAcfUserFields {

    public function __construct() {
        add_action('init', [$this, 'createACFFields']);
    }

    function createACFFields() {
        register_extended_field_group([
            'title'  => __('Additional Information','iasd'),
            'style'  => 'default',
            'fields' => [
                Image::make('Avatar', 'user_avatar')
                    ->returnFormat('id')
                    ->required(),
                Url::make('Facebook URL', 'facebook'),
                Url::make('Twitter URL', 'twitter'),
                Url::make('Instagram URL', 'instagram'),
            ],
            'location' => [
                Location::if('user_form', 'edit')->and('user_role', 'colunista'),
            ]
        ]);

        register_extended_field_group([
            'title'  => __('Column information', 'iasd'),
            'style'  => 'default',
            'fields' => [
                Text::make(__('Column name','iasd'), 'column_name')
                    ->required(),
                Textarea::make(__('Column excerpt', 'iasd'), 'column_excerpt')
                    ->required(),
            ],
            'location' => [
                Location::if('user_form', 'edit')->and('user_role', 'colunista')->and('user_role', '!=', 'administrator'),
            ]
        ]);
    }

}

$PaAcfUserFields = new PaAcfUserFields();
