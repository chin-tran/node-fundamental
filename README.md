## Steps setup an NODEJS container on docker

1. Build your image with node version(default node v16)
    ```docker build -t [image-name-and-tag] --build-arg NODE_VERSION=xxx .```
2. Create a live environment for a js file or server

    ```docker run --rm --name node-env -v $(pwd):/app -p 9000:6000 -e RUNNING_FILE=your-js-file [image-name-and-tag]```
