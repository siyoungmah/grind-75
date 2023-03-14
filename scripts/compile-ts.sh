#!/bin/bash

# check to see if they passed in which ts file they want to compile
if [ -z $1 ]; then
  echo -en '\n'
  echo -e "\033[0;31mMake sure to format the command properly:\033[0m"
  echo -en '\n'
  echo -e "\033[01;36mCorrect Syntax:\033[0m 'npm run ts-compile <hh name>' "; 
  echo -en '\n'
# check to ensure that the test file being requested exists
elif [ ! -f "./solutions/typescript/$1" ] && [ ! -f "./solutions/typescript/$1.ts" ]; then
  echo -en '\n'
  echo -e "\033[0;31mFile does not exist for:\033[0m \033[01;36m$1\033[0m"
  echo -e "\033[0;31mPlease check your spelling.\033[0m"
  echo -en '\n'
# if solutions argument is present, run test file with it
elif [ $2 ]; then
  if [ ! -f "./solutions/typescript/$1" ] && [ ! -f "./solutions/typescript/$1.ts" ]; then
    echo -en '\n'
    echo -e "\033[0;31mFile does not exist for:\033[0m \033[01;36m$1\033[0m"
    echo -e "\033[0;31mPlease check your spelling.\033[0m"
    echo -en '\n'
  else
    echo Compiling typescript file for $1 $2
    echo -en '\n'
    # if they passed the ts to compile in as <filename>.ts, then don't add .ts to filename
    if [[ $1 == *".ts"* ]]; then
      tsc --target es2022 --strict true --module commonjs --noImplicitAny true $2/typescript/$1
    # if they followed instructions and passed in just the name of the ts:
    else
      tsc --target es2022 --strict true --module commonjs --noImplicitAny true $2/typescript/$1.ts
    fi
  fi
# else, run the test file for files in challenges
else 
  if [ ! -f "./challenges/typescript/$1" ] && [ ! -f "./challenges/typescript/$1.ts" ]; then
    echo -en '\n'
    echo -e "\033[0;31mFile does not exist for:\033[0m \033[01;36m$1\033[0m"
    echo -e "\033[0;31mPlease check your spelling.\033[0m"
    echo -en '\n'
  else
    echo Compiling typescript file for $1
    echo -en '\n'
    # if they passed the hh to test in as <hh>.js, then don't add .js to filename
    if [[ $1 == *".ts"* ]]; then
      tsc --target es2022 --strict true --module commonjs --noImplicitAny true challenges/typescript/$1
    # if they followed instructions and passed in just the name of the HH:
    else
      tsc --target es2022 --strict true --module commonjs --noImplicitAny true challenges/typescript/$1.ts
    fi
  fi
fi