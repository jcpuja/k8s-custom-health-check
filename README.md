# Custom Kubernetes Health Check

An example implementation for a custom Kubernetes health check implementation.

## Setup Google Cloud docker registry

From [the docs](https://cloud.google.com/container-registry/docs/quickstart):

Configure the Google Registry:
```
gcloud auth configure-docker
```

Tag the image you want to upload:
```
docker tag <your image> gcr.io/[PROJECT-ID]/<your image>:<any tag>
```

Push the image to the registry:
```
docker push gcr.io/[PROJECT-ID]/<your image>:<your tag>
```