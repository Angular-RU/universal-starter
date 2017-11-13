FROM node:8-alpine as buildContainer

COPY . /app
WORKDIR /app
RUN yarn install
RUN npm run build:universal

FROM node:8-alpine

WORKDIR /app
# Copy dependency definitions
COPY --from=buildContainer /app/package.json /app
COPY --from=buildContainer /app/server.js /app

# Get all the code needed to run the app
COPY --from=buildContainer /app/dist /app/dist
COPY --from=buildContainer /app/dist-server /app/dist-server

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "run", "server"]
