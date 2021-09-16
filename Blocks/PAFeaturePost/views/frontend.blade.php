@if (is_admin())
    <img class="img-preview" src="{{ get_stylesheet_directory_uri() }}/Blocks/PAFeaturePost/preview.png" />
@elseif(!empty($items))
    @foreach($items as $item)
        @if(count($items) == 3)
            @if($loop->index == 0)
                <div class="col-md-8">
            @elseif($loop->index == 1)
                <div class="col-md-4">
            @endif
        @endif
        
        <div class="col-md-{{ count($items) == 1 || count($items) == 3 ? '12' : '6' }}">
            <div class="pa-blog-itens mb-5">    
                <div class="pa-blog-feature">
                    <a href="{{ get_the_permalink($item) }}" title="{{ get_the_title($item) }}">
                        <div class="ratio ratio-16x9">
                            <figure class="figure m-xl-0 w-100">
                                <img src="{{ check_immg($item, 'full') }}" class="figure-img img-fluid m-0 rounded w-100 h-100 object-cover" alt="{{ get_the_title($item) }}" />
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
@endif
