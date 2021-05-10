from studentDebtForecaster.settings import BASE_DIR, key_path
from requests import get
import os

# College Scorecard API Key
CSC_API_KEY = open(os.path.join(key_path, "college_scorecard_key")).read()

# College Scorecard API URL
BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/'


def get_schools(state, city):
    endpoint = 'schools'
    fields = ['id', 'school.name']
    query_string = f'school.state={state}&school.city={city}&fields=' + \
        ','.join(fields)
    return execute_csc_api_request(endpoint, query_string)


def get_cities(state):
    endpoint = 'schools'
    fields = ['school.city']
    query_string = f'school.state={state}&fields=' + \
        ','.join(fields)
    return execute_csc_api_request(endpoint=endpoint, query=query_string)


def get_school_url(state, city, instnm):
    endpoint = 'schools'
    fields = ['school.school_url']
    query_string = f'school.state={state}&school.city={city}&school.name={instnm}&fields=' + \
        ','.join(fields)
    return execute_csc_api_request(endpoint, query_string)


def execute_csc_api_request(endpoint, query):
    query_string = f'?api_key={CSC_API_KEY}&'
    query_string = query_string+query
    url = BASE_URL+endpoint+query_string
    print(url)
    response = get(url)
    return response.json()
