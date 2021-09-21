@notempty($query_args)
    @php $query = new WP_Query($query_args); @endphp

    <div id="load-more-results" class="position-relative" data-args="{{ !empty($args) ? $args : '' }}">
        @each($template, $query->posts, 'id')

        <div id="load-more-trigger" class="position-absolute w-100"></div>
    </div>
@endnotempty