# tfk-sendmail-if-json
Scans a folder sends mail if it contains json-files

## Docker
To run this module as a service use the docker image.

Change [docker.env](docker.env) to match your environment

Build
```sh
$ docker build -t tfk-sendmail-if-json .
```

or use prebuilt
```sh
$ docker pull telemark/tfk-sendmail-if-json
```

Run a container

```sh
$ docker run --env-file=docker.env --rm tfk-sendmail-if-json 
```

or with prebuilt image

```sh
$ docker run --env-file=docker.env --rm telemark/tfk-sendmail-if-json 
```

This will spin up a container. Do the jobs. Shut it down and remove it.