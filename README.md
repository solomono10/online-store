# App
## Build App
$ docker build -t store-online .

## Start App
$ docker run -it -p 3000:80 store-online

# Acceptance test
## Run tests
$ cd acceptance-test
$ npm run cypress:run
