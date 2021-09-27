@notempty($id)
    @php
        $editorial = getPostEditorial($id);
        $format = getPostFormat($id);
    @endphp

    <div class="pa-blog-item mb-3 border-0">
        <a href="{{ get_the_permalink($id) }}" title="{{ get_the_title($id) }}">
            <div class="row">
                @if(has_post_thumbnail($id))
                    <div class="col-5 col-md-4">
                        <div class="ratio ratio-16x9">
                            <figure class="figure m-xl-0">
                                <img src="{{ check_immg($id, 'full') }}" class="figure-img img-fluid rounded m-0 h-100 w-100" alt="{{ get_the_title($id) }}">
                                
                                @notempty($editorial)
                                    <figcaption class="pa-img-tag figure-caption text-uppercase rounded-right d-none d-md-table-cell">{!! $editorial->name !!}</figcaption>
                                @endnotempty
                            </figure>	
                        </div>
                    </div>
                @endif

                <div class="col">
                    <div class="card-body{{ has_post_thumbnail($id) ? ' p-0' : ' ps-4 pe-0 py-4 border-start border-5 pa-border' }}">
                        @notempty($format)
                            <span class="pa-tag text-uppercase d-none d-xl-table-cell rounded">{{ $format->name }}</span>
                        @endnotempty

                        <h3 class="fw-bold h6 mt-xl-2 pa-truncate-4">{{ get_the_title($id) }}</h3>

                        <p class="d-none d-xl-block m-0 pa-truncate-3">{!! get_the_excerpt($id) !!}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
@endnotempty