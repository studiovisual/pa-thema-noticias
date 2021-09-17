@notempty($args)
    @php $query = new WP_Query($args); @endphp

    <div id="load-more-results" {!! acf_esc_attrs($args) !!}>
        @each('template-parts.card-post', $query->posts, 'post')
    </div>

    <div class="row justify-content-center">
        <div class="col-auto">
            <a id="load-more-trigger" href="#" class="btn btn-outline-primary btn-block mt-4">Carregar mais</a>
        </div>
    </div>
@endnotempty