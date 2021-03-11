from django.shortcuts import HttpResponse


def index(request):
    return HttpResponse("Hello, world! This is the ML API index.")
