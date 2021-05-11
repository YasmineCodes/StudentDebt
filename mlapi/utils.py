from studentDebtForecaster.settings import BASE_DIR, key_path
import pandas as pd
import pickle
from pathlib import Path
import os
from requests import get


LINKPREVIEW_API_KEY = os.environ("LINKPREVIEW_KEY")

p = BASE_DIR
filename = os.path.join(p, 'ml_models/rf_regressor1.pkl')
model = pickle.load(open(filename, 'rb'))
city_cat_codes = pd.read_csv(os.path.join(p, 'ml_models/city_cat_codes.csv'))
stabbr_cat_codes = pd.read_csv(
    os.path.join(p, 'ml_models/stabbr_cat_codes.csv'))
accred_cat_codes = pd.read_csv(
    os.path.join(p, 'ml_models/accred_cat_codes.csv'))


# Read in basic inst data
# Read in reduced institutional data
na_vals = ['Na', 'NaN', 'PrivacySuppressed']
df = pd.read_csv(os.path.join(p, 'data/reduced_inst_data_with_cats.csv'),
                 na_values=na_vals)
selected_features = ['UNITID', 'INSTNM', 'CITY', 'STABBR', 'ACCREDAGENCY', 'CONTROL',
                     'COSTT4_A', 'COSTT4_P', 'TUITIONFEE_IN', 'TUITIONFEE_OUT', 'PFTFAC', 'PCTPELL']
df = df[selected_features]
PREDICTIVE_FEATURES = ['UNITID', 'CITY', 'STABBR', 'ACCREDAGENCY', 'CONTROL',
                       'COSTT4_A', 'COSTT4_P', 'TUITIONFEE_IN', 'TUITIONFEE_OUT', 'PFTFAC', 'PCTPELL']
# Function for filling in numeric nulls


def fill_na_numeric(dataframe, columns, df_full):
    for label, content in dataframe.items():
        if pd.api.types.is_numeric_dtype(content) and label in columns:
            # Add column that has true if row had missing value for the column
            dataframe[label+'_is_missing'] = pd.isna(content)
            if pd.isnull(content).sum():
                # Fill missing values for median for the column
                dataframe[label] = content.fillna(df_full[label].median())


def fill_cat_nums(df):
    print(df.shape)
    df['STABBR'] = stabbr_cat_codes[stabbr_cat_codes.STABBR ==
                                    df.STABBR.values[0]].STABBR_code.values[0]
    df['ACCREDAGENCY'] = accred_cat_codes[accred_cat_codes.ACCREDAGENCY ==
                                          df['ACCREDAGENCY'].values[0]].ACCREDAGENCY_code.values[0]
    df['CITY'] = city_cat_codes[city_cat_codes.CITY ==
                                df['CITY'].values[0]].CITY_code.values[0]

# gather necessary data for ml X using input


def prep_ml_input(user_input):
    # filter df for matching institution
    condition = (df['INSTNM'] == user_input['INSTNM']) & (
        df['CITY'] == user_input['CITY']) & (df['STABBR'] == user_input['STABBR'])
    inst_data = df[condition]
    # TODO: handle no returned results, don't call fill_na_numeric if no data
    # Reduce inst_data df to keep only predictive_features
    inst_data = inst_data[PREDICTIVE_FEATURES]
    # fill null values if any in returned data
    fill_na_numeric(inst_data, inst_data.columns.drop(
        ['UNITID', 'CONTROL']), df)
    # Turn categories to nums
    fill_cat_nums(inst_data)
    return inst_data


def get_prediction(X):
    result = model.predict(X)
    # TODO: add error handling
    return round(result[0], 2)


def get_school_image(url):
    linkpreview_api_url = 'http://api.linkpreview.net/?key=' + LINKPREVIEW_API_KEY
    query = "&q=" + url
    linkpreview_api_url = linkpreview_api_url + query
    print(linkpreview_api_url)
    response = get(linkpreview_api_url)
    return response.json()
