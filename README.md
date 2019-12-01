# neurofleet
Neuro Fleet, application that uses telemetric and eeg data with the kerbspace API to provide real-time management of deliveries.

## Test coordinates for the entire Borough of Camden
latlon - 51.517113, -0.220087,51.579361, -0.102606

## Original sample
# Antioch
![alt text](icon.png)

## Installation
`git clone [this repo]`

BLOCKCHAIN SETUP:\
`cd blockchain/; ./setup.sh`\
`testrpc`\
`run truffle commands`\

## Installation IRIS Container
`git clone https://github.com/intersystems-community/objectscript-rest-docker-template.git:latest`

'cd' to the project folder

DOCKER SETUP:
`docker build --rm -f "Docker" -t iris-docker-disrupt:`

*Wait for build to complete sucessfully*

`docker run ...`

DATABASE SETUP:\
Must have cockroachdb installed!
`cd to db`\
`cockroach start --insecure` *must be done in separate terminal\
`cockroach sql --insecure --database=drill < schema.sql` *Initializing the db's and tables\

# Try it!

Take a look at our Beta web app [HERE!](http://www..com/)

[![Build Status](https://travis-ci.org/coderrick/drill.svg?branch=master)](https://travis-ci.org/coderrick/drill)

