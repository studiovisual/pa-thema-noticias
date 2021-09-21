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

                @include('template-parts.load-more', [
                    'template' => 'template-parts.card-post',
                    'query_args'     => array(
                        'fields'              => 'ids',
                        'post_status'	      => 'publish',
                        'ignore_sticky_posts' => 1,
                        'post__not_in'        => $exclude,
                        'paged'               => (get_query_var('paged')) ? get_query_var('paged') : 1,
                    ),
                    'args' => 'posts?_fields=featured_media,title,excerpt,link&exclude=' . implode(',', $exclude), 
                ])
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
