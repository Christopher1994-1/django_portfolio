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

def update_refs_durs(table, ip, activity, id):
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute(f"UPDATE {table} SET refs_dur = ? WHERE ip = ? AND id = ?", (activity, ip, id))
    db.commit()
    db.close()






#, adding new returning vistior entry
def addNewEntry_RV(ip, timestamp, activity):
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM unique_visitors WHERE ip = ?', (ip, ))
    result = cur.fetchall()[0]
    db.commit()
    db.close()
    
    (1, '', '', '127.0.0.1', None, None, None, None, None, "('Windows', 'NT', '10.0;', 'Win64;')", 'Chrome/120.0.0.0', '0, (index loaded - 1703569754), (index loaded - 1703569784)', '0', '12/25/2023 09:44:58 PM')
    
    id, name, email, ip, country, state, city, zip_code, asn, op_sys, browser, refs_durs, totalT, timestamp = result
    refs_durs = activity
    hitts = '1'
    
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute(f"""INSERT INTO returning_visitors 
                (name, email, ip, country, state, city, zip_code, asn, operating_sys, browser, refs_dur, total_duration, timestamp, visits)
                VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, (name, email, ip, country, state, city, zip_code, asn, op_sys, browser, refs_durs, totalT, timestamp, hitts))
    db.commit()
    db.close()
    
    






#| function that handles for when a user is a returning visior
def handle_returning_visitor(ip, compareDate, timestamp, activity):
    
    #! check if the visitor is already in the RV table
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM returning_visitors WHERE ip = ?', (ip, ))
    result = cur.fetchall()
    db.commit()
    db.close()
    
    # result = (1, '', '', '127.0.0.1', None, None, None, None, None, "('Windows', 'NT', '10.0;', 'Win64;')", 
    #           'Chrome/120.0.0.0', '(index loaded - 6)', '0', '12/25/2023 06:57:46 PM')
    
    now = datetime.datetime.now()
    compareDate = str(now.strftime("%m/%d/%Y %I:%M:%S %p")).split(' ')[0]
    
    if result:
        print('update')
        print(result)
    else:
        print('new')
    
        






#, Step 1 
#= check if the user has been on the site before




#| function called to check if user has been to the site before
def checking_UV_table(ip):
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM unique_visitors WHERE ip = ?', (ip,))
    counter = cur.fetchall()
    db.commit()
    db.close()
    
    if counter:
        return counter
    else:
        return counter






    
#========================================================================================        
#| functions that handle when a user arrives on the page
    
        

def visitor_activity(userStuff, ip, bt):
    
    counter = checking_UV_table(ip)

    #. initialize variable for timestemp
    now = datetime.datetime.now()
    compareDate = str(now.strftime("%m/%d/%Y %I:%M:%S %p")).split(' ')[0]
    # compareDate = '01/02/2024'
    
    timestamp = ''
    activity = ''
    visitor_id = ''

    
    current_ = []
    subject = ''
    
    if counter:
        for i in counter:
            current_.append(i)
        length = len(current_) - 1
        subject = current_[length]
        
        
        
    if subject:
        timestamp = str(subject[13]).split(' ')[0].strip()
        activity = str(subject[11])
        visitor_id = subject[0]
        # print(timestamp)

        if timestamp == compareDate:
            if activity != 'none':
                new_activity = f"{activity}, ({userStuff})"
                update_refs_durs('unique_visitors', ip, new_activity, visitor_id)
            else:
                activity = f"[({userStuff}), ]"
                update_refs_durs('unique_visitors', ip, activity, visitor_id)
                
                
        else:
            if activity != 'none':
                new_activity = f"{activity}, ({userStuff})"
                update_refs_durs('unique_visitors', ip, new_activity, visitor_id)
            else:
                activity = f"[({userStuff}), ]"
                update_refs_durs('unique_visitors', ip, activity, visitor_id)
                
        
#========================================================================================        





















#========================================================================================        
#| functions that handle when a user leaves the page
    

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
    
    return updatedActivity, time_Spent_On_Page


def visitor_activity2(userStuff, ip):
    #= function that is fired when the user leaves a page or off website
    db = sqlite3.connect(db_name)
    cur = db.cursor()
    cur.execute('SELECT * FROM unique_visitors WHERE ip = ?', (ip,))
    counter = cur.fetchall()
    db.commit()
    db.close()
    
    now = datetime.datetime.now()
    compareDate = str(now.strftime("%m/%d/%Y %I:%M:%S %p")).split(' ')[0]
    
    
    if counter:
        last_index = len(counter) - 1
        data = counter[last_index]
        
        # print()
        # print('-' * 45)
        # print(data)
        # print('-' * 45)
        # print()
        
        dataID = int(data[0])
        dataIP = data[3]
        dataACT = data[11]
        timestamp = str(data[13]).split(' ')[0].strip()

        if timestamp == compareDate:
            updatedd = update_leavingActivity(dataACT)
            update_refs_durs('unique_visitors', dataIP, updatedd[0], dataID)
        else:
            updatedd = update_leavingActivity(dataACT)
            update_refs_durs('unique_visitors', dataIP, updatedd[0], dataID)

    
#========================================================================================   
    