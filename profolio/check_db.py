import sqlite3
import datetime
import time
# from main_site import models
import unittest


db_name = "main_profolioDB.db"
db_name2 = 'db.sqlite3'




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
                timestamp TEXT,
                visits TEXT
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
            
        
        
# list_tables_sqlite(db_name2)


check_columns_sqlite(db_name2, "main_site_projects")
        
        
        
rt = "returning_visitors"
un=  'unique_visitors'

#.
#=
#,
#!
#3
#*
#| 


"""
id
title
short_description
technologies_used
imageCover
images
demo_url
gitHub
long_description
has_video
video_url
site_url
project_type
use_cases
"""



# deleteFromTable(db_name, un)
# selectingALL(db_name2, 'auth_user')


# check_columns_sqlite('db.sqlite3', 'auth_user')


test_string = '|, apis, data focused, error handling, online payment, data collecting, web development, |, python, javascript, django, |, full stack app'




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
    db = sqlite3.connect(db_name2)
    cur = db.cursor()
    cur.execute(f"SELECT id FROM main_site_projects WHERE {table} LIKE '%{term}%'")
    result = cur.fetchall()
    db.commit()
    db.close()

    if result:
        return result
    else:
        pass
    


#* hard SQL select query function
def hard_sql(term:str, column:str, tt:int ) -> int:
    result = ''
    
    if tt == 0:
        db = sqlite3.connect(db_name2)
        cur = db.cursor()
        cur.execute(f"SELECT id FROM main_site_projects WHERE {column} = ?", (term,))
        result = cur.fetchall()
        db.commit()
        db.close()
    else:
        db = sqlite3.connect(db_name2)
        cur = db.cursor()
        cur.execute(f"SELECT id FROM main_site_projects WHERE {column} LIKE '%{term}%'")
        result = cur.fetchall()
        db.commit()
        db.close()
        print(result) #| returns [(1,), (2,)]
        #! change the example test to have 'client side app' so we can test [[(1,), (2,)], None] and how to isolate the nums
        

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





#* function that checks if any hard filters are true
def extreme_filter(data_list, filters2):

    types = ['full stack apps', 'server side apps', 'client side apps']
    use_cases = ['desktop development', 'web development']
    
    
    # list that holds all updated values
    new_values = []

    for term in filters2:
        if term in use_cases:
            a = hard_sql(term, 'use_cases', 1)
            new_values.append(a)
        else:
            b = hard_sql(term, 'project_type', 0)
            new_values.append(b)
    
    
    print(new_values) # returns || [[(1,), (2,)], None]
    
    




#= Main filtering function
def filter_algo(string):
    #. step one we need to seperate each list of filters. ie, use_cases, tech_used and type
    
    #* getting use cases in list format
    first_iteration = string_seperator(string, 1)
    
    extremeFilters = []
    
    #| then we can iterate over each list of filters, adding the filtered ones that match the filter to a seperate list
    
    #* seperate list to store filtered results 
    filtered_results = []
    
    for term1 in first_iteration:
        num1 = standard_sql(term1, 'use_cases') # returns a number
        if term1 == 'web development' or term1 == 'desktop development':
            extremeFilters.append(term1)
            
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
        extremeFilters.append(term3)
        if num3 == None:
            pass
        else:
            filtered_results3.append(num3[0][0])

    
    #| then do some logic to determine if the values in both lists match up and if so combine them to one list, if not disgard the ones that dont
    
    final = filtered_results + filtered_results2 + filtered_results3
    
    final_result = removing_duplicates(final)
    filter_extreme = extreme_filter(final_result, extremeFilters)
    
    # return final_result
    


# filter_algo(test_string)

# # class TestStringSeperator(unittest.TestCase):
# #     def test_string_seperator_case1(self):
# #         string1 = '|, apis, data focused, error handling, online payment, data collecting, web frameworks, |, python, javascript, django, |, full stack app'
# #         result1 = string_seperator(string1, 3)
# #         self.assertEqual(result1, ['full stack app'])


# # if __name__ == '__main__':
# #     unittest.main()


