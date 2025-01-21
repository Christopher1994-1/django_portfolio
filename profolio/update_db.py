import sqlite3

MAIN_DATABASE: str = 'db.sqlite3'
PROJECT_TABLE: str = "main_site_projects"
l = "https://main553.b-cdn.net/portfolio/stripe%20backend%20payment/stripe_payment_large_image.png"
s = 'https://res.cloudinary.com/dyzidhqli/image/upload/v1705088437/portfolio/star1_zh2zgu.png'



#. FUNCTION THAT GETS ALL THE COLUMNS OF THE GIVEN DB
def get_all_columns(db_name: str) -> None:
    db = sqlite3.connect(db_name)
    
    cursor = db.cursor()
    
    query = "SELECT name FROM sqlite_master WHERE type='table';"
    
    cursor.execute(query)
    tables = cursor.fetchall()
    
    for i in tables:
        print(i)
        
        
#. FUNCTION THAT GETS ALL DATA FROM GIVEN TABLE
def select_all(db_name: str, table_name: str, limit:int, offset:int, set_all:bool) -> None:
    db = sqlite3.connect(db_name)
    
    cursor = db.cursor()
    query = ''
    
    if set_all:
        query = f"SELECT demo_url FROM {table_name} LIMIT {limit} OFFSET {offset}"
    else:
        query = f"SELECT demo_url FROM {table_name}"
    
    cursor.execute(query)
    tables = cursor.fetchall()
    
    for i in tables:
        print()
        print(i)
        
        

#. FUNCTION THAT UPDATES GIVEN COLUMN
def update(db_name: str, table_name: str, new_value: str, column_name: str, id_: str) -> None:
    db = sqlite3.connect(db_name)
    
    cursor = db.cursor()
    
    # Use parameterized query to prevent SQL injection and properly handle values
    query = f"UPDATE main_site_projects SET {column_name} = ? WHERE id = ?;"
    
    cursor.execute(query, (new_value, id_))
    
    db.commit()  # Save the changes
    print("Row has been updated...")
    db.close()   # Close the connection



#. FUNCTION THAT SELECTS ALL COLUMNS IN A GIVEN TABLE
def get_table_columns(db_name: str, table_name: str) -> None:
    # Connect to the SQLite database
    db = sqlite3.connect(db_name)
    cursor = db.cursor()
    
    # Query to get column information
    query = f"PRAGMA table_info({table_name});"
    
    # Execute the query
    cursor.execute(query)
    
    # Fetch and print column names
    columns = cursor.fetchall()
    print("Column Names:")
    for column in columns:
        print(column[1])  # The second element in the tuple contains the column name
    
    # Close the connection
    db.close()

    

#update(MAIN_DATABASE, PROJECT_TABLE, s, 'imageCover_small', "1")


select_all(MAIN_DATABASE, PROJECT_TABLE, 0, 0, False)




"""
id
title
short_description
technologies_used
images
demo_url
gitHub
long_description
has_video
video_url
site_url
project_type
use_cases
imageCover_large
imageCover_small


"""