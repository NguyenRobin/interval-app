# Pull in the parent image into our image as inital layer. "Get version 18 of node and use distribution of linux"
FROM node:18-alpine 

# Placing it directly after FROM so that every intruction after use this WORKING DIRECTORY. WORKDIR tells docker that when we run commands on the image in the future, after this instruction. Now when a command is run, it will do it inside this /app folder 
WORKDIR /app

# For caching purpose. we add this here. 
COPY package.json .

# Install all depenecies we need to an image. We can specify all commands we want to run as the image gets build. One problem wtih 'RUN npm install', this command is going to be run inside the root directory of the image but our package.json file is copied to an /app folder. So it wont find the package.json file. To make it work, we need to run this command in the same directory /app we need to specify a WORKING DIRECOTRY for the image. A RUN istruction runs a command as the image is being built
RUN npm install 

# Copy all of our source code 'COPY . .' The first DOT is a realtive path to the directory i want to copy my source files from. Since those source files are in the same root directory as Dockerfile, the path is only going to be a single DOT (current directory). the SECOND DOT is the path inside the image i want to copy my source code to. So basically 'Copy into the root directory of the image we creating'. But often we don't copy into the root directory because it might clash with other files or folder inside the root directory. But because we have specifed a WORKDIR /app we can say COPY . . 
COPY . .

# EXPOSE tells which port the container should expose (OPTIONAL: if we only want to use the dokcer desktop app)
EXPOSE 5173

# CMD allows us to specify any commands that should be run at runtime, when the container begins to run. 
CMD [ "npm", "run", "dev" ]

# Layer Caching - FROM, WORKDIR, COPY, RUN, EXPOSE and CMD are all layers that get built to the image. Layer caching in a Dockerfile is a technique used to optimize the building of Docker images. Docker images are constructed in layers, and each instruction in a Dockerfile creates a new layer. Layer caching allows you to reuse previously built layers, saving time and resources during image builds. Now FROM, WORKDIR and RUN can be pulled from the cache if change something in our COPY . . file: But one problem with this is. If the image is being buit it will try to RUN npm install before the package.json file gets copied over to it by 'COPY . .' So it won't know what to install. therfore we added it before RUN npm install command. 