#!/bin/bash
gcc -o aout $1
gcc -o bout $2

./aout > test.txt
./bout > test2.txt
RES=$(diff --brief "test.txt" "test2.txt")
if [ -z "${RES}" ];then
	echo "eq"
else
	echo "diff"
fi
rm test.txt aout
rm test2.txt bout
