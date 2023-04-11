# Desmos

## Environment Variable Files

[Files on the left have more priority than files on the right:](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used)
`yarn start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
`yarn build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`

## Development

1. Duplicate `./app/.env.development.local.example` to `./app/.env.development.local`
2. Update values within `.env.development.local` if necessary
3. Run `sh dev-up.sh`
4. Check the site at **localhost:4580**

## Setup on Server

Server should have Node 16, Yarn and PM2 installed.

1. Clone the project to the server
2. Duplicate `./app/.env.production.local.example` to `./app/.env.production.local`
3. Update `NEXT_PUBLIC_HOSTNAME` within `./app/.env.production.local`
4. `cd` to `./app`
5. Run `yarn --ignore-engines` (Expected version "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0". Got "14.13.1". Since there is no LTS Nodejs version in these expected versions, we use `--ignore-engines` to install the packages first, until a suitable LTS version has been released.)
6. Run `yarn build`
7. Run `pm2 start yarn --name desmos -- start`
8. Run `pm2 save`
9. Update nginx config inside `/etc/nginx/sites-available` on the server to the same as `/nginx/nginx.conf` in this repo
10. Run `sudo systemctl restart nginx.service`

## Deployment

1. Run `git pull origin`
2. `cd` to `./app`
3. Run `yarn --ignore-engines` (Expected version "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0". Got "14.13.1". Since there is no LTS Nodejs version in these expected versions, we use `--ignore-engines` to install the packages first, until a suitable LTS version has been released.)
4. Run `yarn build`
5. Run `pm2 restart desmos`

## Reminds

1. Environment variables should be prefixed with `NEXT_PUBLIC_`. otherwise `process.env` won't read them.
