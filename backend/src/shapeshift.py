###### Implementation of the ShapeShift API in Python.
###### Can be used to create a conversion transaction with a specific deposit address.
import requests

BASE_URL = 'https://shapeshift.io/%s'

def _shapeshift_get_requests(url_path):
    url = BASE_URL % url_path
    response = requests.get(url)
    return response.json()

################ GET REQUESTS ######################
def get_coins():
    return _shapeshift_get_requests('getcoins')

def get_rate(input_coin,output_coin):
    url_path = 'rate/{}_{}'.format(input_coin,output_coin)
    return _shapeshift_get_requests(url_path)

def get_deposit_limit(input_coin,output_coin):
    url_path = 'limit/{}_{}'.format(input_coin,output_coin)
    return _shapeshift_get_requests(url_path)

def get_market_info(input_coin,output_coin):
    url_path = 'marketinfo/{}_{}'.format(input_coin,output_coin)
    return _shapeshift_get_requests(url_path)

def get_recent_tx_list(max_transactions=5):
    assert 1 <= max_transactions <= 500
    url_path = 'recenttx/{}'.format(max_transactions)
    return _shapeshift_get_requests(url_path)

def get_tx_status(address):
    url_path = 'txstat/{}'.format(address)
    return _shapeshift_get_requests(url_path)

def get_time_remaining(address):
    url_path = 'timeremaining/{}'.format(address)
    return _shapeshift_get_requests(url_path)

def get_tx_by_api_key(api_key):
    url_path = 'txbyapikey/{}'.format(api_key)
    return _shapeshift_get_requests(url_path)

def get_tx_by_address(address,api_key):
    url_path = 'txbyaddress/{}/{}'.format(address,api_key)
    return _shapeshift_get_requests(url_path)

def validate_address(address,symbol):
    url_path = 'validateAddress/{}/{}'.format(address,symbol)
    return _shapeshift_get_requests(url_path)

###################### POST REQUESTS ####################
def _shapeshift_post_requests(url_path, data):
    url = BASE_URL % url_path
    response = requests.post(url,data)
    return response.json()

def create_normal_tx(withdrawal_address, input_coin,output_coin,return_address = None, destination_tag = None, rs_address = None, api_key = None):
    url_path = 'shift'
    payload = {
    'withdrawal': withdrawal_address,
    'pair': '{}_{}'.format(input_coin,output_coin),
    'returnAddress': return_address,
    'destTag': destination_tag,
    'rsAddress': rs_address,
    'apiKey': api_key
    }

    payload = {k:v for k,v in payload.items() if v is not None}

    return _shapeshift_post_requests(url_path,payload)

def request_email_receipt(email_address, transaction_id):
    url_path = 'mail'
    payload = {
    'email_address': email_address,
    'transaction_id': transaction_id
    }
    payload = {k:v for k,v in payload.items() if v is not None}
    return _shapeshift_post_requests(url_path,payload)

def create_fixed_amount_tx(withdrawal_address, input_coin,output_coin,return_address = None, destination_tag = None, rs_address = None, api_key = None):
    url_path = 'sendamount'
    payload = {
    'withdrawal': withdrawal_address,
    'pair': '{}_{}'.format(input_coin,output_coin),
    'returnAddress': return_address,
    'destTag': destination_tag,
    'rsAddress': rs_address,
    'apiKey': api_key
    }

    payload = {k:v for k,v in payload.items() if v is not None}

    return _shapeshift_post_requests(url_path,payload)

def cancel_tx(address):
    url_path = 'cancelpending'
    payload = {
        'address': address
    }

    payload = {k:v for k,v in payload.items() if v is not None}

    return _shapeshift_post_requests(url_path,payload)
