@php
    $video_url = get_field('video_url', $post_id, false);
    $image_url = wp_get_attachment_url( get_post_thumbnail_id(), 'thumbnail' );
@endphp

{{-- Se o ACF audio_url não estiver vazio executa --}}
@if (!empty($video_url) && !empty($image_url))
    <div class="floating-video position-relative" data-video="{{$video_url}}" id="embed-video">
        <picture class="d-inline-block mw-100 floating-video__thumbnail w-100 overflow-hidden">
            <img class="img-fluid thumb-video w-100 mt-1" src="{{$image_url}}" alt="{{!! the_title() !!}}">
        </picture>
        <div class="card__play position-absolute">
            <div class="icon rounded-circle d-flex align-items-center">
                <em class="uil uil-play mx-auto"></em>
            </div>
        </div>
    </div>
@endif

<div class="row d-flex align dark-content-bg meta-video pb-3 mb-4">
    <div class="col-md-6 col-12">
        @include('components.metas.author', get_the_ID())
    </div>
    <div class="col-md-6 col-12 post-meta-date">
        @include('components.metas.meta')
    </div>
</div>
<div class="col-12">
    @include('components.metas.share')
</div>
