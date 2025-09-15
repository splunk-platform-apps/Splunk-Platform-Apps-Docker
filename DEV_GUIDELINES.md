# Development Guidelines
This document aims describing the steps to be performed to develop a Splunk App such as the `sample-app` using the Splunk Platform Apps Docker image.

:point_right: The [sample-app](./sample-app/) is an example of Splunk App built leveraging the [Splunk UI Toolkit](https://splunkui.splunk.com/Toolkits/SUIT/Overview). Please note you could use the image to build any other type of Splunk App or Add-On, leveraging also the [UCC Framework](https://splunk.github.io/addonfactory-ucc-generator/).

:bulb: This approach will enable you leveraging the Splunk Platform Apps Docker image for a consistent development environment, while using VSCode for a powerful and flexible coding experience.

## Getting Started
The following sections explain how to integrate the provided image with [VSCode](https://code.visualstudio.com/) and either [Docker Desktop](https://www.docker.com/products/docker-desktop/) or [Podman](https://podman.io/)

- [Docker Desktop](#docker-desktop) steps
- [Podman](#podman) steps

### Docker Desktop
#### Steps

1. **Spin up the Docker Container**
   - You can use either Docker CLI or Docker Desktop to run the container. Follow  [guidelines](.docker-guidelines.md) to learn more about how to run the container
   - Ensure the container is running and accessible

2. **Connect with VSCode**
   - Install the [Remote - Containers](https://code.visualstudio.com/docs/devcontainers/containers) extension in VSCode
   - Open VSCode and use the command palette (`Ctrl+Shift+P`) to select `Remote-Containers: Attach to Running Container...`
   - Choose your running Splunk container from the list

3. **Setup VSCode**
   - Once connected, you can open the project folder inside the container
   - Install any necessary dependencies and tools within the container environment

4. **Develop**
   - Follow [Splunk UI Toolkit](https://splunkui.splunk.com/Toolkits/SUIT/Overview) documentation to create and manage your app
   - Follow [UCC Framework](https://splunk.github.io/addonfactory-ucc-generator/) documentation to create and manage your TA

5. **Test your work**
   - Make changes in VSCode and see them reflected in real-time
   - Connect to the Splunk instance loaded by the container to test your app

### Podman
#### Steps

1. **Setup Podman Environment**
   - Install and configure [Podman](https://podman.io/) on your system
   - Run `podman compose up -d` to start the container

2. **Configure VSCode for Podman**
   - Install the [Remote - Containers](https://code.visualstudio.com/docs/devcontainers/containers) extension in VSCode
   - Update VSCode to leverage Podman instead of Docker containers
      - In `Settings` change `Dev > Containers: Docker Path` to `podman`

3. **Develop**
   - Follow step 4 from the [Docker Desktop section](#docker-desktop)

#### Troubleshooting
   - **Errors related to podman registries**
     - Ensure the Docker Hub registry is correctly set with your credentials
     - When pulling the Splunk image in the Dockerfile, prefix it with `docker.io/` (e.g., `docker.io/splunk/...`)
   - **Errors related to the Splunk Web UI not starting properly**
      - Ensure the container is running and accessible
      - Restart the container
      - Delete the image and container and re-run the `podman compose up -d` command
