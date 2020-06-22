import paho.mqtt.client as mqtt

#Publisher

client = mqtt.Client()
client.connect("138.47.204.243",1883,60)
myvar = "Potato"
client.publish("topic/test", myvar)
client.publish("CoreElectronics/test", myvar)
client.disconnect()


