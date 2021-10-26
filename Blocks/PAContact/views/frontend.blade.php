@if(is_admin())
	<img class="img-preview" src="{{ get_stylesheet_directory_uri() }}/Blocks/PAContact/preview.png"/>
@else
	<div class="pa-widget pa-w-list-columns col mb-5 col-md-4">
		@notempty($title)
			<h2>{!! $title !!}</h2>
		@endnotempty

		@notempty($items)
			<div class="mt-4">
				@foreach($items as $item)
					@php
						$key         = "user_{$item}"; 
						$avatar      = get_field('user_avatar', $key);
						$column_name = get_field('column_name', $key);
						$data        = get_userdata($item);
					@endphp

					<div class="pa-author-item pa-blog-item">
						<a href="{{ get_author_posts_url($item) }}" title="{{ $data->display_name }}">
							<div class="row align-items-center">
								<div class="col-auto pe-3">
									<div class="ratio ratio-1x1">
										<figure class="figure m-0">
											<img src="{{ !empty($avatar) ? $avatar['sizes']['medium'] : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkwMCIgdmlld0JveD0iMCAwIDE2MDAgOTAwIj4KICA8cmVjdCBpZD0iUmV0w6JuZ3Vsb18xIiBkYXRhLW5hbWU9IlJldMOibmd1bG8gMSIgd2lkdGg9IjE2MDAiIGhlaWdodD0iOTAwIiBmaWxsPSIjOTA5MDkwIi8+Cjwvc3ZnPg==' }}" class="figure-img rounded-circle m-0 h-100 w-100" alt="{{ $data->display_name }}" />
										</figure>	
									</div>
								</div>

								<div class="col ps-1">
									<div class="card-body p-0">
										@notempty($column_name)
											<span class="pa-tag text-uppercase d-inline-block rounded">{!! $column_name !!}</span>
										@endnotempty

										@notempty($data->display_name)
											<h3 class="fw-bold m-0">{!! $data->display_name !!}</h3>
										@endnotempty
									</div>
								</div>
							</div>
						</a>
					</div>
				@endforeach
			</div>
		@endnotempty

		@notempty($enable_link)
			<a 
				href="{{ $link['url'] ?? '#' }}" 
				target="{{ $link['target'] ?? '_self' }}"
				class="pa-all-content"
			>
				{!! $link['title'] !!}
			</a>
		@endnotempty
	</div>
@endif