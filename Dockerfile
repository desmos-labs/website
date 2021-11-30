FROM node:14.15.0-alpine

ENV PORT 3000

# Install git for ui and internal packages
RUN apk add --no-cache git

# Set app directory
WORKDIR /app

# Add PM2
RUN yarn global add pm2

# Installing dependencies
COPY package*.json ./
COPY yarn* ./
RUN ["yarn", "install", "--ignore-engines"]

# Copying source files
COPY . .

ENV NODE_ENV "production"
ENV PORT 3000

# Building app
RUN ["yarn", "build"]
EXPOSE 3000

# Running the app
CMD ["pm2-runtime", "dist/index.js"]
