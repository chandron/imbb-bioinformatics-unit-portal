# IMBB Bioinformatics Unit site

Portal for the IMBB-FORTH Bioinformatics Unit.

## Run with Docker

Build and start the site at <http://localhost:8080>:

```sh
docker compose up --build -d
```

To use another host port:

```sh
PORT=3000 docker compose up --build -d
```

After source changes are pushed to GitHub, update the checkout and rebuild:

```sh
git pull
docker compose up --build -d
```

Docker caches dependency installation until `package.json` or
`package-lock.json` changes, so source-only updates rebuild quickly.

Add the correct network
```docker network connect   network_app_network   bioinformatics-unit-site-website-1
```


Stop the site with:

```sh
docker compose down
```
