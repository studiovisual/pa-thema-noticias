<?php

use WordPlate\Acf\Fields\Number;
use WordPlate\Acf\Fields\Oembed;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Location;
use WordPlate\Acf\Fields\File;

class PaAcfPostFields {

    public function __construct() {
        add_action('init', [$this, 'createACFFields']);
    }

    function createACFFields() {
        // ACF fields pra formato de video
        register_extended_field_group([
            'title' => __('Video info','iasd'),
            'style' => 'default',
            'fields' => [
                Oembed::make(__('Video','iasd'), 'video_url')
                    ->required(),
                Number::make(__('Lenght','iasd'), 'video_length')
                    ->instructions(__('It will be obtained when saving the post.','iasd'))
                    ->readOnly(),
            ],
            'location' => [
                Location::if('post_taxonomy', 'xtt-pa-format:video'),
            ]
        ]);

        register_extended_field_group([
            'title'      => __('Author info', 'iasd'),
            'style'      => 'default',
            'position'   => 'side',
            'fields'     => [
                Text::make(__('Author', 'iasd'), 'custom_author'),
            ],
            'location'   => [
                Location::if('post_type', 'post'),
            ]
        ]);

        // ACF Fields pra formato de áudio
        register_extended_field_group([
            'title' => __('Áudio info','iasd'),
            'style' => 'default',
            'fields' => [
                File::make(__('Áudio','iasd'), 'audio_url')
                    ->instructions('Faça upload do arquivo de <strong>audio</strong> aqui.')
                    ->required(),
            ],
            'location' => [
                Location::if('post_taxonomy', 'xtt-pa-format:audio'),
            ]
        ]);
    }

}

$PaAcfPostFields = new PaAcfPostFields();
