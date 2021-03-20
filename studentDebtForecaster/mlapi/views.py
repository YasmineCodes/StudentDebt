from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .utils import prep_ml_input, get_prediction
from .college_scorecard import get_cities, get_schools


class Prediction(APIView):
    def get(self, request, format=None):
        # Get input data from request object
        instnm = request.query_params['INSTNM']
        city = request.query_params['CITY']
        stabbr = request.query_params['STABBR']
        print(instnm, city, stabbr)
        user_input = {'INSTNM': instnm, 'CITY': city, 'STABBR': stabbr}

        # Prep ml_model input data
        input_data = prep_ml_input(user_input=user_input)
        payload = {'prediction': get_prediction(input_data)}
        return Response(payload, status=status.HTTP_200_OK)


class Cities(APIView):
    def get(self, request, format=None):
        state = request.query_params['state']
        response = get_cities(state)
        if 'errors' in response:
            return Response({'error': 'Unsuccessful'}, status=status.HTTP_404_NOT_FOUND)
        results = response.get('results')
        cities = []
        for result in results:
            cities.append(result['school.city'])
        payload = {'cities': cities}
        return Response(payload, status=status.HTTP_200_OK)


class Schools(APIView):
    def get(self, request, format=None):
        print(request)
        state = request.query_params['state']
        city = request.query_params['city']
        print(city, state)
        response = get_schools(state, city)
        if 'errors' in response:
            return Response({'error': 'Unsuccessful'}, status=status.HTTP_404_NOT_FOUND)
        results = response.get('results')
        schools = []
        for result in results:
            schools.append(result['school.name'])
        payload = {'schools': schools}
        return Response(payload, status=status.HTTP_200_OK)
