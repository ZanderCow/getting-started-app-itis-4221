# Getting started

This repository is a sample application for users following the getting started guide at https://docs.docker.com/get-started/.

The application is based on the application from the getting started tutorial at https://github.com/docker/getting-started


## Running docker-compose command
`docker compose up -d`

## Running tests with Docker

Build the test image:

```bash
docker build -f Dockerfile.test -t getting-started-app-test .
```

Run the tests:

```bash
docker run --rm getting-started-app-test
```
