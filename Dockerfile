# Use the official Splunk Enterprise image as base, specifically for AMD64 architecture
FROM --platform=linux/amd64 splunk/splunk:latest

# Switch to root user for installation tasks
USER root

# Install required packages using microdnf
RUN microdnf update -y && \
    microdnf install -y curl tar gzip && \
    microdnf clean all

# Install Node.js and required tools:
# 1. Create temporary directory for downloads
# 2. Show disk space (diagnostic)
# 3. Download Node.js v22.19.0
# 4. Extract Node.js archive
# 5. Move Node.js to final location
# 6. Create symbolic links for node and npm
# 7. Clean up downloaded archive
# 8. Install Splunk AppInspect tool
# 9. Add Splunk and Node.js binaries to PATH
RUN mkdir -p /tmp/node-download && cd /tmp/node-download && \
    df -h && \
    curl -fsSL https://nodejs.org/dist/latest-v22.x/node-v22.19.0-linux-x64.tar.gz -o node.tar.gz && \
    tar -xf node.tar.gz && \
    mv node-v20.11.1-linux-x64 /usr/local/node && \
    ln -s /usr/local/node/bin/node /usr/local/bin/node && \
    ln -s /usr/local/node/bin/npm /usr/local/bin/npm && \
    ln -s /usr/local/node/bin/npx /usr/local/bin/npx && \
    rm node.tar.gz && \
    cd /opt/splunk/bin && \
    pip3 install splunk-appinspect && \
    pip install splunk-add-on-ucc-framework && \
    npm install -g yarn@1.22.22 && \
    ln -s /usr/local/node/bin/yarn /usr/local/bin/yarn && \
    echo 'export PATH=$PATH:/opt/splunk/bin:/usr/local/node/bin' >> /root/.bashrc

# Set default shell to bash for subsequent commands
SHELL ["/bin/bash", "-c"]
