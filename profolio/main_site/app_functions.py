import smtplib
import datetime
import os
import datetime
import sqlite3
import time



#, for production use
#= ------------------------------------------------ #
is_production = False
db_name = ''
other_db = ''

if is_production:
    db_name = "/home/kirko190255/avrlinetech/unique_vistors.db" # add path to db in pythonanywhere
    other_db = "/home/kirko190255/avrlinetech/unique_vistors.db"
else:
    db_name = "main_profolioDB.db"
    other_db = 'db.sqlite3'
    
    
    
    
    
now = datetime.datetime.now()
compareDate = str(now.strftime("%m/%d/%Y"))


#= ------------------------------------------------ #


#. FUNCTION THAT IS USED TO EMAIL MYSELF ABOUT THINGS
def send_email(message: str, subject1: str) -> None:
    """ function that is used to send an email

    Args:
        message (str): the message body you want to send
        subject1 (str): the subject of the message
    """
    SENDER: str = "supersweet098@gmail.com"
    RECEIVER: str = "kirko190255@gmail.com"
    APP_PASS: str = "erwrvoczzqsrxrsu"
    

    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        smtp.login(SENDER, APP_PASS)
        subject = subject1
        body = message

        msg = f"Subject: {subject}\n\n{body}"

        smtp.sendmail(SENDER, RECEIVER, msg)


#3
#3
#3
#3
#3
#3
#3
#3


#========================================================================================
#| function that takes in ip_address and returns city, country, zipcode, asn, and ip_security
def api_request_ip_details(ip):
    """ API call function that returns state, city, country, zip code, and other ip related infomation.

    Args:
        ip (str): str ip

    Returns:
        list: returns a list of values returned by the API call
    """
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








#. FUNCTION THAT CHECKS IF THE VISITOR HAS BEEN TO THE SITE BEFORE
def hasVisitedSiteBefore(ip):
    """ function that checks if visitor has been on the site before. It will check the unique_visitors table to check if
    the IP is in there, if it is, the user has been to the site before if not its a new visitior.

    Args:
        ip (str): str ip address

    Returns:
        boolean: returns True if user has been to the site before and returns False if they haven't
    """
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM unique_visitors WHERE ip = ?', (ip,))
    result = cur.fetchall()
    db.commit()
    db.close()
    
    timestamp = ''
    # do a for loop to check if there is more than one 
    current_ = []
    subject = ''
    
    
    if result:
        for i in result:
            current_.append(i)
        length = len(current_) - 1
        subject = current_[length]
        

    if subject:
        timestamp = str(subject[13]).split(' ')[0].strip()

        if timestamp == compareDate:
            return 'same day'
        else:
            return 'different day'
    else:
        return 'no visitor exists'

        






#========================================================================================
#| function that adds a new session log into returning_visitors table
def addSessionLogFor_ReturningVisitor(ip):
    #! get the other data from previois vistors so we dont have to make another API call
    result = 'made it'
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT country, state, city, zip_code, asn, operating_sys, browser FROM unique_visitors WHERE ip = ? ', (ip,))
    result = cur.fetchall()[0]
    db.commit()
    db.close()
    
    
    country = result[0]
    state = result[1]
    city = result[2]
    zipCode = result[3]
    asn = result[4]
    op_sys = result[5]
    browser = result[6]
    
    refs_dur = 'none'
    totalT = '0'
    
    
    name = ''
    email = ''
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute("""
                INSERT INTO unique_visitors 
                (
                    name, 
                    email, 
                    ip, 
                    country, 
                    state, 
                    city, 
                    zip_code, 
                    asn, 
                    operating_sys, 
                    browser, 
                    refs_dur, 
                    total_duration,
                    timestamp
                    ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", 
                
                (name, email, ip, country, state, city, zipCode, asn, op_sys, browser, refs_dur, totalT, compareDate))
    db.commit()
    db.close()
    
    
#========================================================================================


#3
#3
#3
#3
#3
#3
#3
#3


#========================================================================================
#| function that adds a new session log into unqiue_visitors table
def addSessionLogFor_UniqueVisitor(ip, browser):
    #= name - email - ip - country - state - city, zip_code - asn - os - browser - refs_dur - total_duration
    sight = False
    #! Step 1, make the API call to get IP related data
    asn = ''
    state = ''
    city = ''
    country = ''
    zipCode = ''
    if sight:
        data = api_request_ip_details(ip)
        #* Step 2 initialize set of variables to contain return data from API call
        asn = data[0]
        state = data[1]
        city = data[2]
        country = data[3]
        zipCode = data[4]
    else:
        asn = 'None'
        state = "None"
        city = "None"
        country = "none"
        zipCode = "none"
        
    
    
    
    #! spliting and handling the broswer and OS str 
    browserType = ''
    systemInfo = ''
    try:
        browserSplit = str(browser).split(' ')
        os_s = str(browserSplit[1]).replace('(', "")
        os_V = browserSplit[2]
        os_v2 = browserSplit[3]
        os_e = browserSplit[4]
        systemInfo = str((os_s, os_V, os_v2, os_e))
        browserType = str(browserSplit[10])
    except:
        systemInfo = "Unknown"
        browserType = "Unknown"
    

    
    
    #= initialize empty variables for columns 'name' and 'email'
    name = ''
    email = ''

    #. we can add the info to the returning_users table when the the site
    
    #! Step 3 initialize the start_time variable that will hold the str representation of the session
    start_time = 'none'

    
    #= set conditional to check if last_page == None, if so, user is coming from another site
    total_time = '0'
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute("""
                INSERT INTO unique_visitors 
                (
                    name, 
                    email, 
                    ip, 
                    country, 
                    state, 
                    city, 
                    zip_code, 
                    asn, 
                    operating_sys, 
                    browser, 
                    refs_dur, 
                    total_duration,
                    timestamp
                    ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""", 
                
                (name, email, ip, country, state, city, zipCode, asn, systemInfo, browserType, start_time, total_time, compareDate))
    db.commit()
    db.close()
#========================================================================================


#3
#3
#3
#3
#3
#3
#3
#3


def sameDay():
    pass
#========================================================================================        
#| first function that is called when vistior comes, updates starttime and current_page
def start_session(ip, browser):
    #= name - email - ip - country - state - cityzip_code - asn - os - browser - refs_dur - total_duration
    
    #! first thing we need to do is check if the visitor has visited before
    result = hasVisitedSiteBefore(ip)
    
    
    if result == 'no visitor exists':
        addSessionLogFor_UniqueVisitor(ip, browser)
    elif result == 'same day':
        sameDay()
    elif result == 'different day':
        addSessionLogFor_ReturningVisitor(ip)
        
    
        
#========================================================================================








#=========================================================================================
#| functions that clean filter projects strings



#* function to seperate string and get only set values
def string_seperator(string, number):
    newString = str(string).split('|')
    type_selection = str(newString[number]).split(',')
    
    final_result = []
    
    for i in type_selection:
        if i == ' ':
            pass
        elif i == '':
            pass
        elif i == ',':
            pass
        else:
            final_result.append(str(i).strip())
            
    return final_result



#* standard SQL select query function
def standard_sql(term, table):
    db = sqlite3.connect(other_db)
    cur = db.cursor()
    cur.execute(f"SELECT id FROM main_site_projects WHERE {table} LIKE '%{term}%'")
    result = cur.fetchall()
    db.commit()
    db.close()

    if result:
        return result
    else:
        pass
    


#* removing duplicates from list
def removing_duplicates(liste):
    unique_list = []
    
    for item in liste:
        if item not in unique_list:
            unique_list.append(item)
            
    return unique_list



#* function that takes the filters and returns a version to be put on the jumbo
def handle_jumbo_wording(string):
    newString = str(string).split('|')
    newString = ''.join(newString).split(',')
    final = []
    for i in newString:
        if i == '':
            pass
        elif i == ',':
            pass
        elif i == ' ':
            pass
        else:
            final.append(str(i).strip())
    
    newFinial = final[:4] # ['apis', 'data focused', 'error handling', 'online payment']
    ss = ', '.join(newFinial) + '...' # apisdata focusederror handlingonline payment
    
    return ss



#= Main filtering function
def filter_algo(string):
    #. step one we need to seperate each list of filters. ie, use_cases, tech_used and type
    
    #* getting use cases in list format
    first_iteration = string_seperator(string, 1)
    
    #| then we can iterate over each list of filters, adding the filtered ones that match the filter to a seperate list
    
    #* seperate list to store filtered results 
    filtered_results = []
    
    for term1 in first_iteration:
        num1 = standard_sql(term1, 'use_cases') # returns a number
        if num1 == None:
            pass
        else:
            filtered_results.append(num1[0][0])
        

    
    #| make a second iteration of the second list 'tech used'
    
    second_iteration = string_seperator(string, 2)
    
    filtered_results2 = []
    
    for term2 in second_iteration:
        num2 = standard_sql(term2, 'technologies_used')
        if num2 == None:
            pass
        else:
            filtered_results2.append(num2[0][0])
            

    #| add the second iterations results to another list 
    
    third_iteration = string_seperator(string, 3)
    
    filtered_results3 = []
    
    
    for term3 in third_iteration:
        num3 = standard_sql(term3, 'project_type')
        if num3 == None:
            pass
        else:
            filtered_results3.append(num3[0][0])

    
    #| then do some logic to determine if the values in both lists match up and if so combine them to one list, if not disgard the ones that dont
    
    final = filtered_results + filtered_results2 + filtered_results3
    
    final_result = removing_duplicates(final)
    
    return final_result
    
#==========================================================================================


# if __name__ == "__main__":
#     send_email('fucking', 'test')