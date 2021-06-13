docker stop ConfigurationServer
docker container rm	ConfigurationServer
docker build --tag configurationserver:1.0 .
docker run --name ConfigurationServer -p 4567:4567 configurationserver:1.0