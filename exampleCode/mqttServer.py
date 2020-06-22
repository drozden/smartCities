########################################
# Server Code
# ######################################
#This code subscribes the pi to 
# a certain message. After it recieves
# this message, it runs a different code
# causing an LED to blink
########################################

#import functions
import datetime
import os
import paho.mqtt.client as mqtt

#subscribes the client pi to the server pi's message
def on_connect(client, userdata, flags, rc):
	print("Connected with result code "+str(rc))

	client.subscribe("CoreElectronics/test")
	client.subscribe("CoreElectronics/topic")
	client.subscribe("thp1/topic")

# decodes the message sent by the server
def on_message(client, userdata, msg):
	message = msg.payload.decode()
	print(str(message))
	if message== "Potato":
		os.system('python3 blink.py')
		print("Test")
		print(datetime.datetime.now())
		return

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

#client.connect("138.47.204.243", 1883, 60)
client.connect("138.47.204.231", 1883, 60)


client.loop_forever()
