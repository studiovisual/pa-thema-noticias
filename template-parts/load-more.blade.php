@notempty($args)
    @php $query = new WP_Query($args); @endphp

    @each('template-parts.card-post', $query->posts, 'post')

    <div class="row justify-content-center">
        <div class="col-auto">
            <a href="#" class="btn btn-outline-primary btn-block mt-4">Carregar mais</a>
        </div>
    </div>
@endnotempty