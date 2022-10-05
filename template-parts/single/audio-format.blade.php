@php
    $audio_url = get_field('audio_url');
@endphp

{{-- Se o ACF audio_url não estiver vazio executa --}}
@if (!empty($audio_url))
    <div class="audio-container">
        {!! $audio_url !!}
    </div>
@endif
