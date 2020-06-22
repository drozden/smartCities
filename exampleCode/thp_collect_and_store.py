import bme280
import smbus2
import time
import datetime
from pymongo import MongoClient


mdb_client = MongoClient("mongodb://data_poster:postsensordata@localhost:27017/")      
port = 1
address = 0x77 # Adafruit BME280 address. Other BME280s may be different
bus = smbus2.SMBus(port)

bme280.load_calibration_params(bus,address)

while True:
    bme280_data = bme280.sample(bus,address)
    humidity  = bme280_data.humidity
    pressure  = bme280_data.pressure
    ambient_temperature = bme280_data.temperature
    record = {"sensor":"THP1", "datetime":str(datetime.datetime.now()), "humidity":humidity, "pressure":pressure, "temperature":ambient_temperature}
    print(record)
    db = mdb_client.sensorData 
    db.thp1.insert_one(record)
    time.sleep(1)
