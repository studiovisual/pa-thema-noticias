@extends('layouts.app')

@section('content')

<div class="pa-content py-5">
	<div class="container">
        <div class="row">
            <div class="col-12{{ is_active_sidebar('front-page') ? ' col-md-8' : '' }}">
                <load-more 
                    template="card-post" 
                    url="{{ get_rest_url(null, 'wp/v2/posts') }}"
                    args="{{ '_fields=featured_media_url.pa-block-render,title,excerpt,link,terms&author=' . get_queried_object()->ID }}"
                    nonce="{{ wp_create_nonce('wp_rest') }}"
                >
                    <template id="card-post">
                        <card-post *foreach="@{{this.items}}" .post="@{{item}}"></card-post>
                    </template>
                </load-more>
            </div>

            @if(is_active_sidebar('front-page'))
                <aside class="col-md-4 d-none d-xl-block">
                    @php(dynamic_sidebar('front-page'))
                </aside>
            @endif
        </div>
    </div>
</div>

@endsection
