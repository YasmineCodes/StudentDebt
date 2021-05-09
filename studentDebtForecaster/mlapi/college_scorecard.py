from requests import get


# College Scorecard API Key
CSC_API_KEY = 'bubUxNmNuua7lXNQayI4KsmfJql8OkpBaj29CYWa'

# College Scorecard API URL
BASE_URL = 'https://api.data.gov/ed/collegescorecard/v1/'

# fields = ['id', 'school.name', 'school.city', 'school.state', 'school.accreditor', 'school.ownership', 'cost.attendance.academic_year',
#           'cost.attendance.program_year', 'cost.tuition.in_state', 'cost.tuition.out_of_state', 'school.ft_faculty_rate', 'aid.pell_grant_rate']

# 'cost.attendance.academic_year',
# 'cost.attendance.program_year', 'cost.tuition.in_state', 'cost.tuition.out_of_state', 'aid.pell_grant_rate'
# def get_schools_in_state(state):
#     endpoint = 'schools'
#     fields = ['id', 'school.name', 'school.city', 'school.state', 'school.accreditor', 'school.ownership',  'school.ft_faculty_rate']
#     query_string = f'school.state={state}&fields=' + \
#         ','.join(fields)


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


def get_school_logo(url):
    print("this is the school url passed: ", url)
    logo_api_url = 'https://logo.clearbit.com/'
    logo_api_url = logo_api_url + url
    print(f'this is the parsed domain with logo api url: {logo_api_url}')
    response = get(logo_api_url)
    print(f'this response from logo api{response}')
    return response.json()


def execute_csc_api_request(endpoint, query):
    query_string = f'?api_key={CSC_API_KEY}&'
    query_string = query_string+query
    url = BASE_URL+endpoint+query_string
    print(url)
    response = get(url)
    return response.json()
