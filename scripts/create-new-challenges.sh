#!/bin/bash

# check to see if they passed in which new challenge they want to create
if [ -z $1 ]; then
  echo -en '\n'
  echo -e "\033[0;31mMake sure to format the command properly:\033[0m"
  echo -en '\n'
  echo -e "\033[01;36mCorrect Syntax:\033[0m 'npm run create-new <challenge name>' "; 
  echo -en '\n'
# check to ensure that the challenges doesn't already exists
elif [ -f "./challenges/$1.js" ] || [ -f "./challenges/typescript/$1.ts" ] || [ -f "./solutions/$1.js" ] || [ -f "./solutions/typescript/$1.ts" ]; then
  echo -en '\n'
  echo -e "\033[0;31mFile already exists for:\033[0m \033[01;36m$1\033[0m"
  echo -e "\033[0;31mPlease check your spelling.\033[0m"
  echo -en '\n'

# create the corresponding files
else
  echo Create files needed for: $1
  echo -en '\n'   
  # if they passed the hh to test in as <hh>.js, then don't add .js to filename
  touch challenges/$1.js
  touch challenges/typescript/$1.ts
  touch solutions/$1.js
  touch solutions/typescript/$1.ts
  touch __tests__/$1.js
fi