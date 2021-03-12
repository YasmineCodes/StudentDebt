from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .utils import prep_ml_input, get_prediction


class Prediction(APIView):
    def get(self, request, format=None):
        # Get input data from request object
        instnm = request.query_params['INSTNM']
        city = request.query_params['CITY']
        stabbr = request.query_params['STABBR']
        user_input = {'INSTNM': instnm, 'CITY': city, 'STABBR': stabbr}

        # Prep ml_model input data
        input_data = prep_ml_input(user_input=user_input)
        payload = {'prediction': get_prediction(input_data)}
        return Response(payload, status=status.HTTP_200_OK)
