# CS340 Docker Compose

- router: nginx

- database: mariadb

- admin: phpmyadmin

- template: NodeJS

# Creating new project

- Copy the ```template``` folder to make a new project, ex: ```new_project```.

- In ```docker-compose.yml``` copy the ```template``` block, change it's name to ```new_project``` and change ```build``` to ```./new_project```.

- In ```docker-compose.yml``` under ```router``` add ```new_project``` to ```links```, ex: ```- new_project``` on the next line.

- In ```./router/nginx.conf``` copy-paste the block ```/template``` and rename to ```/new_project``` (or anything really). Update ```proxy_pass``` to ```new_project```.

- In ```./router/www/index.html``` add a link to ```/new_project``` for convenience.

- In ```./new_project/src/package.json``` change ```name``` to ```new_project``` for correctness.


