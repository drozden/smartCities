FROM raspbian/stretch
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN python get-pip.py
RUN sudo apt-get install i2c-tools python-pip
RUN sudo adduser pi i2c
RUN sudo python3 setup-.py install
RUN sudo pip install RPi.bme280
RUN sudo pip3 install adafruit-circuitpython-bme680
RUN sudo pip3 install adafruit-circuitpython-tsl2591

CMD [ "run", "start" ]




