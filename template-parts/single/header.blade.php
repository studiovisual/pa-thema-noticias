<header class="mb-4">
    <h1 class="fw-bold mb-3">{!! single_post_title() !!}</h1>

    <h2 class="mb-3 pb-3">{!! \Illuminate\Support\Str::of(get_the_excerpt())->limit(250) !!}</h3>

    @if(!empty($format = getPostFormat(get_the_ID())) && $format->slug != 'artigo' && is_singular('post'))        
        <div class="pa-post-meta mb-2">{{__('By', 'iasd')}} 
            <span>{{ getCurrentAuthor(get_the_ID()) }}</span>
            @if($region = getPostRegion(get_the_ID()))
                <em class="pa-pipe">|</em>
                <span><i class="fas fa-map-marker-alt me-2" aria-hidden="true"></i> {{ $region->name }}</span>
            @endif
        </div>
    @endif

    <div class="pa-post-meta">{!! the_date() !!}</div>

    <hr class="my-45">

    <div class="d-flex justify-content-between">
        @php require(get_template_directory() . '/components/parts/share.php') @endphp

        <div class="pa-accessibility">
            <ul class="list-inline">
                <li class="pa-text-dec list-inline-item"><a href="#" class="rounded p-2" onclick="window.TextSize.pa_diminui_texto(event)">-A</a></li>
                <li class="pa-text-inc list-inline-item"><a href="#" class="rounded p-2" onclick="window.TextSize.pa_aumenta_texto(event)">+A</a></li>

                @if(get_post_meta(get_the_ID(), 'amazon_polly_enable', true))
                    <li class="pa-text-listen list-inline-item">
                        <a href="#" class="rounded p-2" onclick="pa_play(event, this)">
                            <i class="fas fa-volume-up"></i> {{__('Hear text', 'iasd')}}
                        </a>
                        
                        <audio id="pa-accessibility-player" src="{{ get_post_meta(get_the_ID(), 'amazon_polly_audio_link_location', true) }}" controls></audio>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</header>
