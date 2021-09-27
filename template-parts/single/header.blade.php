<header class="mb-4">
    <h1 class="fw-bold mb-3">{!! single_post_title() !!}</h1>

    <h2 class="mb-3">{!! the_excerpt() !!}</h3>

    <div class="pa-post-meta">Por 
        @if($custom_author = get_field('custom_author'))
            {!! $custom_author !!}
        @else
            {!! get_the_author() !!}
        @endif
        | São Paulo
    </div>
    
    <div class="pa-post-meta">{!! the_date() !!}</div>

    <hr class="my-45">

    <div class="d-flex justify-content-between">
        <div class="pa-share d-none d-xl-block">
            @php require(get_template_directory() . '/components/parts/share.php') @endphp
        </div>

        <div class="">
            <ul class="pa-accessibility list-inline">
                <li class="pa-text-dec list-inline-item"><a href="#" class="rounded p-2" onclick="pa_diminui_texto(event)" >-A</a></li>
                <li class="pa-text-inc list-inline-item"><a href="#" class="rounded p-2" onclick="pa_aumenta_texto(event)" >+A</a></li>

                @if(get_post_meta(get_the_ID(), 'amazon_polly_enable', true))
                    <li class="pa-text-listen list-inline-item">
                        <a href="#" class="rounded p-2" onclick="pa_play(event, this)">
                            <i class="fas fa-volume-up"></i> Ouvir Texto
                        </a>
                        
                        <audio id="pa-accessibility-player" src="{{ get_post_meta(get_the_ID(), 'amazon_polly_audio_link_location', true) }}" controls></audio>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</header>
