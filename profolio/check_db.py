import sqlite3
import datetime
import time


db_name = "main_profolioDB.db"




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
                operating_sys TEXT,
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



# Function to check all columns in a specified table
def check_columns_sqlite(database_name, table_name):
    conn = sqlite3.connect(database_name)
    cursor = conn.cursor()

    # Query to retrieve column information for the specified table
    cursor.execute(f"PRAGMA table_info({table_name});")
    columns = cursor.fetchall()

    conn.close()

    if not columns:
        print(f"No columns found for table {table_name}")
    else:
        print(f"Columns for table {table_name}:")
        for column in columns:
            print(column[1])  # Column name is at index 1
            
           
#! function to drop table from db
def drop_table(db, table):
    print(f"Are you sure you want to drop table '{table}' from '{db}' ")
    print('=' * 45)
    print("y for yes | n for no")
    user_input = input("> ")
    
    if user_input == 'y':
        conn = sqlite3.connect(db)
        cursor = conn.cursor()
        cursor.execute(f"DROP TABLE {table}")
        conn.commit()
        conn.close()
        
        list_tables_sqlite(db)
    else:
        print('aborted...')
            
            
            
#. checking inside table
def selectingALL(db, name):
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM {name}")
    result = cursor.fetchall()
    conn.commit()
    conn.close()

    for i in result:
        print('-' * 45)
        print(i)
            
            

def deleteFromTable(db, name):
    
    selectingALL(db_name, name)
    
    print()
    print('before deletion')
    print('-' * 45)
    
    conn = sqlite3.connect(db)
    cursor = conn.cursor()
    cursor.execute(f"DELETE FROM {name}")
    conn.commit()
    conn.close()

    print()
    print('before deletion')
    print('-' * 45)
    selectingALL(db_name, name)
            
        
rt = "returning_visitors"
un=  'unique_visitors'


activity = '[(index loaded - 6)],(index loaded - 2)],(index loaded - 8)]',


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

    #, formatting the final str to add to db
    formattedString = f"({page} - {time_Spent_On_Page})"
    new_list.pop(lastListIndex)
    new_list.append(formattedString)
    list_to_Str = ','.join(new_list)
    updatedActivity = list_to_Str
    
    return updatedActivity

#, calcuate the time.time() with LA_time
#, then format it into a new string






selectingALL(db_name, un)
# deleteFromTable(db_name, un)




a = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'



