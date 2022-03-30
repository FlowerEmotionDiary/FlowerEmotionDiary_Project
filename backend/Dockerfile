# Image Download
FROM nvidia/cuda:11.2.0-runtime-ubuntu20.04
WORKDIR /app

RUN apt-get update && DEBIAN_FRONTEND="noninteractive" apt-get install -y \
    python3 \
    python3-pip \
    python-is-python3 \
    openjdk-8-jdk

# Copy files
COPY . .

# Install packages
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "server/app.py"]
