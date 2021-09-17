@php
    $editorial = getPostEditorial($post->ID);
    $format = getPostFormat($post->ID);
@endphp

<div class="pa-blog-item mb-3 border-0">
    <a href="{{ get_the_permalink($post->ID) }}" title="{{ get_the_title($post->ID) }}">
        <div class="row">
            @if(has_post_thumbnail($post->ID))
                <div class="col-5 col-md-4">
                    <div class="ratio ratio-16x9">
                        <figure class="figure m-xl-0">
                            <img src="{{ check_immg($post->ID, 'full') }}" class="figure-img img-fluid rounded m-0 h-100 w-100" alt="{{ get_the_title($post->ID) }}">
                            
                            @notempty($editorial)
                                <figcaption class="pa-img-tag figure-caption text-uppercase rounded-right d-none d-md-table-cell">{!! $editorial->name !!}</figcaption>
                            @endnotempty
                        </figure>	
                    </div>
                </div>
            @endif

            <div class="col">
                <div class="card-body p-0{{ has_post_thumbnail($post->ID) ? '' : ' pl-4 py-4 border-left border-5 pa-border' }}">
                    @notempty($format)
                        <span class="pa-tag text-uppercase d-none d-xl-table-cell rounded">{{ $format->name }}</span>
                    @endnotempty

                    <h3 class="fw-bold h6 mt-xl-2 pa-truncate-4">{{ get_the_title($post->ID) }}</h3>

                    <p class="d-none d-xl-block m-0 pa-truncate-3">{!! get_the_excerpt($post->ID) !!}</p>
                </div>
            </div>
        </div>
    </a>
</div>