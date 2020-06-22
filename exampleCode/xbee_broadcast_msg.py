from digi.xbee.devices import XBeeDevice
import time
from datetime import datetime


SER_PORT = "/dev/tty.usbserial-A50577PD" # This port may change depending on the device the XBee is plugged into
BAUDRATE = 9600

device = XBeeDevice(SER_PORT, BAUDRATE)
device.open()

while 1:
    device.send_data_broadcast("Hello XBee World!" + str(datetime.now()))
    print(datetime.now())
    time.sleep(1)


