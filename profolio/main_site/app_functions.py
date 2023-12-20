import smtplib
import datetime
import os
import datetime
import sqlite3






#= ------------------------------------------------ #
is_production = False
db_name = ''

if is_production:
    db_name = "/home/kirko190255/avrlinetech/unique_vistors.db" # add path to db in pythonanywhere
else:
    db_name = "main_profolioDB.db"
#= ------------------------------------------------ #
    
    
    



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
        
    
        




#. Function that handles when visitor starts
def handling_time_session(ip:str, starttime:str, current_page:str, last_page:str):
    print(ip)
    print(starttime)
    print(current_page)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
#############################################################################################
# App function for sending an email
def send_email():
    my_pass = os.environ.get('ggg')
    my_email = "cejvanniekirk098@gmail.com"
    receiver = "kirko190255@gmail.com" # TODO change to os after restart
    message = f""""""

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(my_email, my_pass)
        subject = "New Employer!"
        body = message

        msg = f"Subject: {subject}\n\n{body}"

        smtp.sendmail(my_email, receiver, msg)
#############################################################################################









