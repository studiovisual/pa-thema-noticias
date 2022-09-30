@php
    $audio_url = get_field('audio_url');
@endphp

{{-- Se o ACF audio_url não estiver vazio executa --}}
@if (!empty($audio_url))
    <figure class="wp-block-audio">
        <audio controls="" src="{{$audio_url['url']}}"></audio>
    </figure>
@endif
