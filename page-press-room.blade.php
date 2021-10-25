{{-- 
    Template name: Page - Press Room
--}}

@extends('layouts.app')

@section('content')

@include('template-parts.home', [
    'post_type' => 'press',
    'sidebar'   => 'front-press',
])

@endsection
