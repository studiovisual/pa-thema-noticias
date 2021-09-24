{{-- 
    Template name: Page - Front Page 
--}}

@extends('layouts.app')

@section('content')

<div class="pa-content py-5">
	<div class="container">
        @include('template-parts.featured-posts')

        <div class="row">
            <div class="col-12{{ is_active_sidebar('front-page') ? ' col-md-8' : '' }}">
                @php global $exclude; @endphp
                
                <load-more template="card-post" args="{{ 'posts?_fields=featured_media,title,excerpt,link&exclude=' . implode(',', $exclude) }}">
                    <template id="card-post">
                        <card-post *foreach="@{{this.posts}}" .post="@{{item}}"></card-post>
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
