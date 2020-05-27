FROM python:3

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install -r docker-requirements.txt

# The -u option avoid Docker to hang on 'attaching...' when Python start
CMD [ "python", "-u", "-m", "connected-home" ]