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
                @include('template-parts.load-more', [
                    'args' => array(
                        'post_status'	=> 'publish',
                        'ignore_sticky_posts' => 1,
                        'paged' => (get_query_var('paged')) ? get_query_var('paged') : 1
                    )
                ])
            </div>
        </div>
    </div>
</div>

@endsection
