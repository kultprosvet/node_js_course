#!/usr/bin/env bash
if [ -z "$1" ]
  then
    echo "Please provide migration name"
    exit
fi
npm run typeorm migration:generate -- -n $1
