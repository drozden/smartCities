#!/bin/bash

sudo apt-get update && 
sudo apt-get upgrade -y && 
sudo curl -fsSL https://get.docker.com > get-docker.sh &&
sudo sh get-docker.sh -y &&
sudo usermod -aG docker pi -y &&
docker version && 
docker info && 
docker run hello-world && 
sudo reboot now