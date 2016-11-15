# tfk-sendmail-if-json
Scans a folder sends mail if it contains json-files

## Docker
To run this module as a service use the docker image.

Change the ENV parts of the [Dockerfile](Dockerfile) or use [docker.env](docker.env)

Build
```sh
$ docker build -t tfk-sendmail-if-json .
```

Run a container

```sh
$ docker run --rm tfk-sendmail-if-json 
```

or

```sh
$ docker run --env-file=docker.env --rm tfk-sendmail-if-json 
```

This will spin up a container. Do the jobs. Shut it down and remove it.