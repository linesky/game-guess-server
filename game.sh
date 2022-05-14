echo guess a number 0 to 100
while read a
do
	echo $a > out.txt
	netcat $1 $2 < out.txt
done
