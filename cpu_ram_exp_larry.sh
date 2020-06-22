dt=$(date +"%F-%H-%M-%S")

# PID=$(top -b -n 1 | grep python | awk '{print $1}') # grabs the PID of running python
PID=25187

filename=te"$dt".log # te stands for Top Experiment

# echo $PID

top -d 2 -b -n 1 -p $PID | grep -A 1 "PID" &> $filename # headers and first probe

top -d 2 -b -p $PID | stdbuf -o0 grep $PID &>> $filename # only grab the metrics
