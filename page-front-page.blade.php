{{-- 
    Template name: Page - Front Page 
--}}

@extends('layouts.app')

@section('content')

<div class="pa-content py-5">
	<div class="container">
        @include('template-parts.featured-posts')

        <div class="row">
            <div class="col-md-8">
                @php global $exclude; @endphp
                @include('template-parts.load-more', [
                    'template' => 'template-parts.card-post',
                    'args'     => array(
                        'post_status'	      => 'publish',
                        'ignore_sticky_posts' => 1,
                        'post__not_in'        => $exclude,
                        'paged'               => (get_query_var('paged')) ? get_query_var('paged') : 1
                    ),
                ])
            </div>
        </div>
    </div>
</div>

@endsection
