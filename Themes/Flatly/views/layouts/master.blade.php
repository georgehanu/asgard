<!DOCTYPE html>
<html>
<head lang="{{ LaravelLocalization::setLocale() }}">
    <meta charset="UTF-8">
    @section('meta')
        <meta name="description" content="@setting('core::site-description')"/>
    @show
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@section('title')@setting('core::site-name')@show</title>
    @foreach($alternate as $alternateLocale=>$alternateSlug)
        <link rel="alternate" hreflang="{{$alternateLocale}}" href="{{url($alternateLocale.'/'.$alternateSlug)}}">
    @endforeach
    <link rel="canonical" href="{{url()->current()}}" />
    <link rel="shortcut icon" href="{{ Theme::url('favicon.ico') }}">
    <link rel="stylesheet" href="{{ mix('editor/admin/index.css') }}"/>

</head>
<body>
@yield('content')
</body>
<script src="{{ mix('editor/admin/index.js') }}"></script>
</html>
