from django.test import TestCase
import datetime
import sqlite3

# Create your tests here


#= ------------------------------------------------ #
is_production = False
db_name = ''

if is_production:
    db_name = "/home/kirko190255/avrlinetech/unique_vistors.db" # add path to db in pythonanywhere
else:
    db_name = "main_profolioDB.db"
#= ------------------------------------------------ #
    
    
#. Returned Value
#= http://127.0.0.1:8000/privacy-policy/ # maybe add a IF statement to check if pages or other
#= Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36



def handle_http_referer(ip, http):
    pass



#* name IF
#* email IF
#* ip
#* ip stuff
#* location stuff
#* asn
#* os
#* browser
#* referers + duration []
#* total_duration
#* time_stamp




#! code for converting '[]' into []
import json

# my_list = json.loads()

'country, statee, city, zipCode'

import time



def timeaa(a):
    b = time.time()
    e = str(time.time() - a).split('.')[0]
    # Convert the duration to a timedelta object
    print(e)


def tt():
    a = time.time()
    time.sleep(120)
    timeaa(a)




tt()



fakeIP = '71.63.255.244'



#. Function to create a new table within the main DB
def create_new_table(table):
    db = sqlite3.connect('main_profolioDB.db')
    cur = db.cursor()
    cur.execute(f"""CREATE TABLE IF NOT EXISTS {table} 
                (id INTEGER PRIMARY KEY, 
                name TEXT,
                email TEXT,
                ip TEXT,
                country TEXT,
                state TEXT, 
                city TEXT,
                zip_code TEXT,
                asn TEXT, 
                os TEXT,
                browser TEXT,
                refs_dur TEXT,
                total_duration TEXT,
                timestamp TEXT
                )"""
                )
    db.commit()
    db.close()


#. List all the tables inside main DB
def list_tables_sqlite(database_name):
    conn = sqlite3.connect(database_name)
    cursor = conn.cursor()

    # Query to retrieve a list of all tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()

    conn.close()

    table_names = [table[0] for table in tables]
    for i in table_names:
        print(i)



#. Checking all the data within said table
def checking_table(database_name, table):
    db = sqlite3.connect(database_name)
    cur = db.cursor()
    cur.execute(f'SELECT * FROM {table}')
    result = cur.fetchall()
    db.commit()
    db.close()
    
    for i in result:
        print('-' * 40)
        print(i)












#. function that takes in ip_address and returns city, country, zipcode, asn, and ip_security
def api_request_ip_details(ip):
    import requests
    from pprint import pprint
    strIP = str(ip)
    
    url = f"https://ip-geo-location.p.rapidapi.com/ip/{strIP}"

    querystring = {"format":"json"}

    headers = {
        "X-RapidAPI-Key": "751db66893mshf0b8e0c2f0b9f07p171a45jsnab3bc91123a0",
        "X-RapidAPI-Host": "ip-geo-location.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)

    data = response.json()

    
    asn = data['asn']['organisation']
        
    state = data['area']['name']
    city = data['city']['name']
    country = data['country']['code']
    poseCode = data['postcode']
    security = data['security']
    typee = data['type']
    
    
    return [asn, state, city, country, poseCode, security, typee]





#. function that checks if the visitor has been to the site before
def hasVisitedSiteBefore(ip):
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM returning_visitors WHERE ip = ?', (ip,))
    result = cur.fetchall()
    db.commit()
    db.close()
    
    if result:
        return True
    else:
        return False
       



#. function that adds a new session log into returning_visitors table
def addSessionLogFor_ReturningVisitor(ip):
    #! get the other data from previois vistors so we dont have to make another API call
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT country, state, cityzip_code, asn, os, browser, refs_dur FROM returning_visitors WHERE ip = ? ', (ip,))
    result = cur.fetchall()
    db.commit()
    db.close()
    
    print(result)


def addSessionLogFor_UniqueVisitor(ip, startime, current_page, last_page, browser):
    #= name - email - ip - country - state - city, zip_code - asn - os - browser - refs_dur - total_duration
    
    #* making api call for other data
    # data = api_request_ip_details(ip)
    print(startime)
    print(current_page)
    print(last_page)
    start_time = f"start: {current_page} - {startime} | {last_page}"
    
    #TODO we need condional statements to check if last_page is None and if so put in some logic to handle that
    
    
    
    
    
    
    
    
    
    # #= ['COMCAST-7922', 'Washington', 'Vancouver', 'US', '98682', {'is_tor': False, 'is_proxy': False, 'is_crawler': False, 
    # #= 'is_threat': False, 'is_thread': False}, 'IPv4']

    # asn = data[0]
    # state = data[1]
    # city = data[2]
    # country = data[3]
    # zipCode = data[4]
    # ip_sec = str(data[5])
    
    # query = "INSERT INTO unique_visitor (name, email, ip, country, state, city, zip_code, asn, )"
    
    # try:
    #     db = sqlite3.connect(db_name)
    #     cur = db.cursor()
    #     cur.execute("")
    #     result = cur.fetchall()
    #     db.commit()
    #     db.close()
    # except:
    #     pass
        


#. first function that is called when vistior comes, updates starttime and current_page
def start_session(ip, startime, current_page, last_page, browser):
    #= name - email - ip - country - state - cityzip_code - asn - os - browser - refs_dur - total_duration
    
    #! first thing we need to do is check if the visitor has visited before
    result = hasVisitedSiteBefore(ip)
    
    
    #* if vistior has been to the site before
    if result:
        addSessionLogFor_ReturningVisitor(ip)
        
    #* If vistior has never been to the site before
    else:
        addSessionLogFor_UniqueVisitor(ip, startime, current_page, last_page, browser)
        
    
    



start_session(fakeIP, '', '')



# returning_visitors
# unique_visitors





# create_new_table('unique_visitors')

# list_tables_sqlite(db_name)

# checking_table(db_name, 'unique_visitors')







# def dri():
#     db = sqlite3.connect(db_name)
#     cur = db.cursor()
#     cur.execute('drop table returning_visitors')
#     db.commit()
#     db.close()
    
# dri()