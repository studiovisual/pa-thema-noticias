@extends('layouts.app')

@section('content')
	@php
		global $wp_query, $queryFeatured;
	@endphp

	<div class="pa-content py-5">
		<div class="container">
			<div class="row justify-content-center">
				<section class="col-12 col-md-8">
					@includeWhen(get_query_var('paged') < 1 && $queryFeatured->found_posts > 0, 'template-parts.global.feature', [
						'post'   => $queryFeatured->posts[0],
						'format' => !empty($format = getPostFormat($queryFeatured->posts[0]->ID)) ? $format->name : '',
					])

					@if($wp_query->found_posts >= 1)
						<div class="pa-blog-itens my-5">
							@foreach($wp_query->posts as $post)
								@include('template-parts.global.card-post', [
									'post'     => $post,
									'category' => !empty($editorial = getPostEditorial($post->ID)) ? $editorial->name : '',
									'format'   => !empty($format = getPostFormat($post->ID)) ? $format->name : '',
								])
							@endforeach
						</div>
					@endif
					
					<div class="pa-pg-numbers row">
						@php( PaThemeHelpers::pageNumbers())
					</div>
				</section>

				@if(is_active_sidebar('archive'))
					<aside class="col-md-4 d-none d-xl-block">
						@php(dynamic_sidebar('archive'))
					</aside>
				@endif
			</div>
		</div>
	</div>
@endsection
