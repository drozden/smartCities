# Publisher and HPT sensor

import bme280
import smbus2
import time
import datetime
import paho.mqtt.client as mqtt 

port = 1
address = 0x77 # Adafruit BME280 address. Other BME280s may be different
bus = smbus2.SMBus(port)

bme280.load_calibration_params(bus,address)

client = mqtt.Client()
client.connect("138.47.204.231",1883,60)

while True:
    bme280_data = bme280.sample(bus,address)
    humidity  = bme280_data.humidity
    pressure  = bme280_data.pressure
    ambient_temperature = bme280_data.temperature
    document = "{\"THP1\": [{ \"Datetime\" = " + "\"" + str(datetime.datetime.now()) + "\"" + ", \"Humidity\" = \"%f\", \"Pressure\" = \"%f\", \"Temp\" = \"%f\"}]}" % (humidity, pressure, ambient_temperature)
    client.publish("thp1/topic", document)   
    time.sleep(1)
