# stage: 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# # Use the official image as a parent image.
# FROM node:current-slim

# # Set the working directory.
# WORKDIR /usr/src/app

# # Copy the file from your host to your current location.
# COPY package.json .

# # Run the command inside your image filesystem.
# RUN npm install

# # Inform Docker that the container is listening on the specified port at runtime.
# EXPOSE 8080

# # Run the specified command within the container.
# CMD [ "npm", "start" ]

# # Copy the rest of your app's source code from your host to your image filesystem.
# COPY . .