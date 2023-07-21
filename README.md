## Prerequisites
Must have docker and docker compose installed in yout machine
## Install
First you need to git clone the repo
```
git clone git@github.com:HectorRC920/challengeMagicLog.git
```
Second need to configure environment variables in this case we only need to configure the container port and binded local port as we find in .env.example
```
NODE_LOCAL_PORT=
NODE_DOCKER_PORT=
```
we copy this file and name it as .env

Then go to the root of the project and run
```
docker-compose up
```
Make a request to http://localhost:(NODE_LOCAL_PORT)/api/v1/test