# Getting started

This repository is a sample application for users following the getting started guide at https://docs.docker.com/get-started/.

The application is based on the application from the getting started tutorial at https://github.com/docker/getting-started

## For graders

1. The author(s) acknowledges the use of Codex in the preparation or completion of this assignment. The Codex was used in the following way(s) in this assignment:  [CI-CD scaffolding].
2. The CI-CD pipline is broken up into 2 parts:
    -  ci.yml
        -  this is triggered via push to repo
    - cd.yml
        - this is triggered via release tag made
3. Both the CI and CD portion are running the same tests and linting. So its being done twice. This is done for redundancy reasons, in case someone tries to publish release with no push.

4. Deploying to infra is left out, instead its continuous delivery, not full deployment The images instead are built and pushed to githubs container registry, instead of going right to infra. I did this because github pages deployment doesnt support static pages so I cant use the nodejs/express code and deploying to AWS or GCP or other cloud platforms cost money. But in a ideal senerio from here, infra/devops team would take the handoff who are using tools like octopus and run image scanning and complience checks and then get signed off for acutal deployment. 





## Running docker-compose command
`docker compose up -d`

## Running CI checks with Docker

Build the test image:

```bash
docker build -f Dockerfile.test -t getting-started-app-test .
```

Run frontend linting and tests:

```bash
docker run --rm getting-started-app-test
```
