from django.urls import path
from .views import Prediction, Cities, Schools

urlpatterns = [
    path('prediction/', Prediction.as_view(), name='prediction'),
    path('cities/', Cities.as_view(), name='cities'),
    path('schools/', Schools.as_view(), name='schools')
]
