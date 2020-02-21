FROM  node:12

# Create application directory
WORKDIR /usr/src/app

# Install app dependencies from where this Dockerfile is.. aka look for the package.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]