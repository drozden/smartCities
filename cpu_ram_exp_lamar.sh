dt=$(date +"%F-%H-%M-%S")
filename=te"$dt".log # te stands for Top Experiment

docker stats --no-stream &> $filename
while true; do
	docker stats --no-stream | tail -n 1 >> $filename
done

