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

if is_production:
    db_name = "/home/kirko190255/avrlinetech/unique_vistors.db" # add path to db in pythonanywhere
else:
    db_name = "main_profolioDB.db"
#= ------------------------------------------------ #


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
#| function that checks if the visitor has been to the site before
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
    
    if result:
        return True
    else:
        return False
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
#| function that adds a new session log into returning_visitors table
def addSessionLogFor_ReturningVisitor(ip):
    #! get the other data from previois vistors so we dont have to make another API call
    result = 'made it'
    # db = sqlite3.connect(db_name)
    # cur = db.cursor()
    # cur.execute('SELECT country, state, cityzip_code, asn, os, browser, refs_dur FROM returning_visitors WHERE ip = ? ', (ip,))
    # result = cur.fetchall()
    # db.commit()
    # db.close()
    
    # print(result)
#========================================================================================


#3
#3
#3
#3
#3
#3
#3
#3


def addSessionLogFor_UniqueVisitor(ip, startime, current_page, last_page, browser):
    #= name - email - ip - country - state - city, zip_code - asn - os - browser - refs_dur - total_duration
    
    #! Step 1, make the API call to get IP related data
    data = api_request_ip_details(ip)
    
    
    #* Step 2 initialize set of variables to contain return data from API call

    asn = data[0]
    state = data[1]
    city = data[2]
    country = data[3]
    zipCode = data[4]
    
    
    
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
    
    
    #. initialize variable for timestemp
    now = datetime.datetime.now()
    formatted_time = str(now.strftime("%m/%d/%Y %I:%M:%S %p"))
    
    
    #= initialize empty variables for columns 'name' and 'email'
    name = ''
    email = ''

    #. we can add the info to the returning_users table when the the site
    
    #! Step 3 initialize the start_time variable that will hold the str representation of the session
    start_time = 'none'

    
    #= set conditional to check if last_page == None, if so, user is coming from another site
    total_time = '0'
    db = sqlite3.connect('main_profolioDB.db')
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
                
                (name, email, ip, country, state, city, zipCode, asn, systemInfo, browserType, start_time, total_time, formatted_time))
    db.commit()
    db.close()
        
        


#. first function that is called when vistior comes, updates starttime and current_page
def start_session(ip, startime, current_page, last_page, browser):
    #= name - email - ip - country - state - cityzip_code - asn - os - browser - refs_dur - total_duration
    
    #! first thing we need to do is check if the visitor has visited before
    result = hasVisitedSiteBefore(ip)
    
    
    #! probably add some logic so that when a user can came to the site and a new session starts it checks the unique vistors
    
    # #* if vistior has been to the site before
    if result == True:
        addSessionLogFor_ReturningVisitor(ip)
        
    #* If vistior has never been to the site before
    else:
        addSessionLogFor_UniqueVisitor(ip, startime, current_page, last_page, browser)
        
        
        #, the first thing we need to do is check if the vistior has been to the site before.
        #, we do this by checking unique, if they are already in unique and the date is the same, then their unique table is updated, 
        #, if the date is not the same then they are added to returning visitors
        #, this will be checked in start_session data with a value passed to the other functions to let them know to what db to say too
        
    
    
    
def update_refs_durs(table, ip, activity):
    db = sqlite3.connect('main_profolioDB.db')
    cur = db.cursor()
    cur.execute(f"UPDATE {table} SET refs_dur = ? WHERE ip = ?", (activity, ip))
    db.commit()
    db.close()
        


def visitor_activity(userStuff, ip):
    
    db = sqlite3.connect('main_profolioDB.db')
    cur = db.cursor()
    cur.execute('SELECT timestamp, refs_dur FROM unique_visitors WHERE ip = ?', (ip,))
    counter = cur.fetchall()
    db.commit()
    db.close()
    
    # making the empty varibales for later use
    timeStamp = ''
    activity = ''
    
    # get todays date and format it to use in conditional 
    now = datetime.datetime.now()
    compareDate = str(now.strftime("%m/%d/%Y %I:%M:%S %p")).split(' ')[0]
        
        
    if counter:
        # timeStamp = str(counter[0][0]).split(' ')[0]
        timeStamp = '12/19/23'
        activity = str(counter[0][1])
        
        #| checking if the visits accure on the same day
        if timeStamp == compareDate:
            
            if activity != 'none':
                #| there is already activity from this visitor
                new_activity = f"{activity}, ({userStuff})"
                update_refs_durs('unique_visitors', ip, new_activity)
            else:
                #| there is no activity from this user
                activity = f"[({userStuff}), ]"
                update_refs_durs('unique_visitors', ip, activity)
        
        else:
            print('different day')
            pass
    else:
        print('nah')
        
    

        

def update_leavingActivity(activity):
    #! removing Bracets and isloating values
    removingBrackets = activity.strip('[]').split(',')


    # empty list to grab only the latest activity
    new_list = []

    for i in removingBrackets:
        if i == ' ' or i == '':
            pass
        else:
            new_list.append(i.strip())

    #! grabbing last index number of list, so that we always edit the latest activity
    lastListIndex = int(len(new_list)) - 1

    #| code to get the time of the page activity
    latestActivity = new_list[lastListIndex]
    LA_time = int(str(latestActivity).split('-')[1].replace(')', '').strip())
    now = int(str(time.time()).split('.')[0])
    time_Spent_On_Page = now - LA_time

    #= code to get the page details of the latest activity
    page = str(latestActivity).split('-')[0].replace('(', '').strip()


    formattedString = f"({page} - {time_Spent_On_Page})"
    new_list.pop(lastListIndex)
    new_list.append(formattedString)
    list_to_Str = ','.join(new_list)
    updatedActivity = list_to_Str
    
    return updatedActivity




#| function that is used to update when the user leaves a page or website
def visitor_activity2(userStuff, ip):
    #= function that is fired when the user leaves a page or off website
    db = sqlite3.connect('main_profolioDB.db')
    cur = db.cursor()
    cur.execute('SELECT timestamp, refs_dur FROM unique_visitors WHERE ip = ?', (ip,))
    counter = cur.fetchall()
    db.commit()
    db.close()
    # try: 
    #     timeStamp = str(counter[0][0]).split(' ')[0]
    #     activity = str(counter[0][1])
        
    #     now = datetime.datetime.now()
    #     compareDate = str(now.strftime("%m/%d/%Y %I:%M:%S %p")).split(' ')[0]
        
    #     if timeStamp == compareDate:
    #         print('hereeeeee')
    #         updatedd = update_leavingActivity(activity)
    #         update_refs_durs('unique_visitors', ip, updatedd)
            
            
    # except:
    #     pass
    
    

    
    
    
    
    
    
    
    
    
    
    
    
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









