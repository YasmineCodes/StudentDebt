from django.urls import path
from .views import Prediction, Cities

urlpatterns = [
    path('prediction/', Prediction.as_view(), name='prediction'),
    path('cities/', Cities.as_view(), name='cities')
]
