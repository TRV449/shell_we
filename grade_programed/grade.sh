#!/bin/bash
if [ $# != 2 ];then
	echo "올바른 사용법 -> bash grade test.c test2.c"
	exit 1
fi
gcc -o aout $1 #aout이라는 실행파일 생성
gcc -o bout $2

./aout > test.txt #>로 실행 결과를 txt에 저장
./bout > test2.txt
RES=$(diff --brief "test.txt" "test2.txt") #diff값을 RES변수에 저장
if [ -z "${RES}" ];then #만약 test.txt와 test2.txt가 같은 값이면 RES는 널값
	echo "eq"
else
	echo "diff"
fi
rm test.txt aout
rm test2.txt bout
