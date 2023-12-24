import sqlite3
import time



#= ------------------------------------------------ #
is_production = False
db_name = ''

if is_production:
    db_name = "/home/kirko190255/avrlinetech/unique_vistors.db" # add path to db in pythonanywhere
else:
    db_name = "main_profolioDB.db"
#= ------------------------------------------------ #

fakeIP = '71.63.255.244'





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
        addSessionLogFor_UniqueVisitor(ip, startime, current_page)




a = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
b = a.split(' ')



# try:
#     browserSplit = 
#     os_s = str(b[1]).replace('(', "")
#     os_V = b[2]
#     os_v2 = b[3]
#     os_e = b[4]
#     systemInfo = str((os_s, os_V, os_v2, os_e))
#     browserType = str(b[10])
#     print(browserType)
# except:
#     systemInfo = "Unknown"
#     browserType = "Unknown"
    