from django.test import TestCase
import datetime

# Create your tests here.



year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]

print(year)