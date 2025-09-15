# Splunk Development Environment with Docker

This guide helps you set up a Splunk development environment using [Docker](https://www.docker.com/). The environment is configurable for different development needs, like apps, dashboards, and add-ons.

By leveraging the Splunk Platform Apps Docker image, you'll have the following tools already available:

- [Node.js 22](https://nodejs.org/docs/latest-v22.x/api/index.html)
- [Yarn 1.22](https://classic.yarnpkg.com/lang/en/docs/)
- [Splunk AppInspect CLI](https://dev.splunk.com/enterprise/docs/developapps/testvalidate/appinspect/useappinspectclitool/)
- [Splunk UCC](https://splunk.github.io/addonfactory-ucc-generator/)

## Prerequisites

- Docker installed on your system
- Basic understanding of Docker concepts

## Quick Start

1. Clone this repository
2. Configure your environment:
   - Open `docker-compose.yaml` and set your desired password in `SPLUNK_PASSWORD`. :point_right: [More info about available settings](#docker-compose)
3. Start the container:
   ```bash
   docker compose up -d
   ```
4. Once the container is running, access Splunk Web UI at `http://localhost:8000` and login with:
   - Username: `admin`
   - Password: (the one set in `docker-compose.yaml`)

The following ports are exposed by default:

- 8000:8000 - Splunk Web UI
- 8088:8088 - HTTP Event Collector
- 8089:8089 - SplunkD management (REST API)

## `docker-compose`

By default the container will be created with name `splunk-dev`. Please edit the value of key `container_name` to assign a different name to it.

### License Configuration

The environment supports different licensing options:
- Free license
- License URL
- License file

Uncomment and set the appropriate `SPLUNK_LICENSE_URI` option.

### Available Ports

As per [Docker Docs](https://docs.docker.com/reference/compose-file/services/#ports) you can expose multiple ports. Some additional Splunk default ports are left commented, please uncomment in case of need.

### Data Persistence

To persist your Splunk data between container restarts:
1. Uncomment the `volumes` section
2. Replace `<your-volume-path>` with your desired local path

## Troubleshooting

If you encounter issues:

1. Check container logs:
   ```bash
   docker logs splunk-dev
   ```
2. Ensure all required ports are available on your host machine
3. Verify your Docker installation with:
   ```bash
   docker --version
   docker-compose --version
   ```

### Common Issues & Solutions

1. Port Conflicts:
   - Check if ports are already in use: `netstat -tuln`
   - Modify port mappings in `docker-compose.yaml`

2. Memory Issues:
   - Increase Docker memory allocation in Docker Desktop settings
   - Monitor usage with `docker stats`

3. Volume Permissions:
   - Ensure proper read/write permissions on mounted volumes
   - Fix with: `chmod -R 777 <volume-path>`

## Docker Basic Guide

You can find a basic guide to Docker in the [docker-resources](./docker-resources.md) file.

For detailed Docker commands and usage, please refer to the official documentation:

- [Container Management Commands](https://docs.docker.com/engine/reference/commandline/container/)
- [Docker Compose Commands](https://docs.docker.com/compose/reference/)
- [Docker Image Commands](https://docs.docker.com/engine/reference/commandline/image/)

### Best Practices

1. Always use version tags for images
2. Regularly clean unused containers and images
3. Monitor container logs for issues
4. Use docker-compose for multi-container setups
5. Back up important data volumes regularly

## Additional Resources

- [Splunk Docker Official Documentation](https://splunk.github.io/docker-splunk/)
- [Splunk Developer Portal](https://dev.splunk.com/)
- [Splunk Community](https://community.splunk.com/)
