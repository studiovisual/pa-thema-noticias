@extends('layouts.app')

@php setup_postdata(get_post()); @endphp

@section('content')
    <div class="pa-content-container py-5">
        <div class="container">
            <div class="row justify-content-center">
                {{-- Main --}}
                <article class="col-12 col-md-8">          
                    {{-- Post header --}}
                    @include('template-parts.single.header')

                    {{-- Conteúdo do post --}}
                    {!! the_content() !!}

                    <hr class="separator">

                    {{-- Post relacionados --}}
                    @include('template-parts.single.related-posts')
                </article>
            </div>
        </div>
    </div>
@endsection