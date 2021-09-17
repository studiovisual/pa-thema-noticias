{{-- 
    Template name: Page - Front Page 
--}}

@extends('layouts.app')

@section('content')

<div class="pa-content py-5">
	<div class="container">
        @include('template-parts.featured-posts')

        {{-- <div class="row">
            @php
            $args = array(
								'post_status'	=> 'publish',
								'ignore_sticky_posts' => 1,
								'paged' => (get_query_var('paged')) ? get_query_var('paged') : 1
							);
                $query = new WP_Query($args);   
            @endphp

            @while($query->have_posts()):
                @php
                    $query->the_post();
                    $categories = get_the_category();
	                $format = get_post_format() ? : 'Notícia';
                @endphp

                <div class="pa-blog-item mb-4 mb-md-4 border-0">
                    <a href="{{ the_permalink() }}" title="{{ the_title_attribute() }}">
                        <div class="row">
                            @if(has_post_thumbnail()):
                                <div class="col-5 col-md-4">
                                    <div class="ratio ratio-16x9">
                                        <figure class="figure m-xl-0">
                                            <img src="{{ check_immg(get_the_ID(), 'full') }}" class="figure-img img-fluid rounded m-0 h-100 w-100" alt="{{ the_title_attribute() }}">
                                            
                                            @notempty($categories)
                                                <figcaption class="pa-img-tag figure-caption text-uppercase rounded-right d-none d-md-table-cell">{!! esc_html($categories[0]->name) !!}</figcaption>
                                            @endnotempty
                                        </figure>	
                                    </div>
                                </div>
                            @endif

                            <div class="col">
                                <div class="card-body p-0{{ has_post_thumbnail() ?: ' pl-4 py-4 border-left border-5 pa-border' }}">
                                    <span class="pa-tag text-uppercase d-none d-xl-table-cell rounded">{{ $format }}</span>
                                    <h3 class="fw-bold h6 mt-xl-2 pa-truncate-4">{{ get_the_title() }}</h3>
                                    <p class="d-none d-xl-block">{{ wp_trim_words(get_the_excerpt(), 30) }}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            @endwhile

            @php
            wp_reset_postdata();
            @endphp
        </div> --}}

    </div>
</div>

@endsection
