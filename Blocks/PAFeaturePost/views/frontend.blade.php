@if (is_admin())
    <img class="img-preview" src="{{ get_stylesheet_directory_uri() }}/Blocks/PAFeaturePost/preview.png" />
@elseif(!empty($items))
    <div class="pa-widget pa-w-featured-post col-12 position-relative mb-5">
        <div class="row">
            @foreach($items as $item)
                @if(count($items) == 3)
                    @if($loop->index == 0)
                        <div class="col-md-8">
                    @elseif($loop->index == 1)
                        <div class="col-md-4">
                    @endif
                @endif
                
                <div class="col-md-{{ count($items) == 1 || count($items) == 3 ? '12' : '6' }}">
                    <div class="pa-blog-itens mb-3 {{ count($items) == 3 && $loop->index == 1 ? 'mb-md-3' : 'pb-md-3 mb-md-4' }}">    
                        <div class="pa-blog-feature">
                            <a href="{{ get_the_permalink($item) }}" title="{{ get_the_title($item) }}">
                                <div class="ratio ratio-16x9">
                                    <figure class="figure m-xl-0 w-100">
                                        <img src="{{ check_immg($item, 'full') }}" class="figure-img img-fluid m-0 rounded w-100 h-100 object-cover" alt="{{ get_the_title($item) }}" />

                                        <figcaption class="figure-caption position-absolute w-100 p-3 rounded-bottom">
                                            @notempty(getPostFormat($item))
                                                <span class="pa-tag rounded-1 text-uppercase mb-2 d-none d-md-table-cell px-2">{{ getPostFormat($item)->name }}</span>
                                            @endnotempty
                                            
                                            <h3 class="h5 pt-2 pa-truncate-2">{!! get_the_title($item) !!}</h3>
                                        </figcaption>
                                    </figure>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                @if(count($items) == 3 && $loop->index == 0 || count($items) == 3 && $loop->index == 2)
                    </div>
                @endif
            @endforeach
        </div>
    </div>
@endif
