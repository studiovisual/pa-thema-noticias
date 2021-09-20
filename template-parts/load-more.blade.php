@notempty($args)
    @php $query = new WP_Query($args); @endphp

    <div id="load-more-results" class="position-relative" template="{{ $template }}" {!! acf_esc_attrs($args) !!}>
        @each($template, $query->posts, 'item')

        <div id="load-more-trigger" class="position-absolute w-100"></div>
    </div>
@endnotempty