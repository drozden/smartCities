import time
import datetime
from pymongo import MongoClient


mdb_client = MongoClient("mongodb://danny:tempP%40ss124@localhost:27017/")      
db = mdb_client.sensorData

record = "test - " + datetime.datetime.now()

start = time.time()
db.testing.insert_one(record)
insert_time = time.time() - start

print("Insert: %s seconds " % (insert_time))

start = time.time()
db.testing.find_one()
query_time = time.time() - start

print("Simple query: %s seconds " % (query_time))

start = time.time()
#db.testing. # SOME ADVANCED QUERY (use alternate datasets)
adv_query_time = time.time() - start


