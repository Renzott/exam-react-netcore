# Dockerfile a netcore 7 project

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /source

# install npm and pnpm
RUN apt-get update && apt-get install -y ca-certificates curl gnupg sudo
RUN sudo mkdir -p /etc/apt/keyrings  
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install nodejs -y
RUN npm install -g pnpm

COPY *.csproj ./
RUN dotnet restore 

COPY . ./

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /source/out ./

EXPOSE 80

CMD dotnet exam-react-net.dll