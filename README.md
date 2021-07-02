# HelloStakaterUiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Local Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Description
    - Angular project to connect with the HelloStakaterApp and  get the name.
    - Append the name with date and display on the page.

## Build Project
Clone project locally `git clone https://github.com/abhishek-yadav-workforce/hello-stakater-ui-app.git`
Build Project -Before build user have installed nodejs in his local machine `npm install`
To run project locally`ng serve or npm start` 

## Build Docker Image
 DockerFile(Docker Script) file which is present in the project
 - Steps to create docker image and push in container registry
1. `ng build --prod`
2. `docker build --force-rm -f Dockerfile -t {reponame}/stakater-ui-app:{docker_version} .`
3. `docker login -u username -p password`
4. `docker tag docker.io/{reponame}/stakater-ui-app:{docker_version} stakater-ui-app:{docker_version}`
5. `docker push docker.io/{reponame}/stakater-ui-app:{docker_version}`
        
## Helm Chart Creation and Deployment in minikube
1. helm-repo folder is present in the root directory 
2. Chart,Values file and template folder is present
3. `helm install hellostakateruiapp ./helm-repo` used to install applicatin in kubernetes cluster
4. `helm upgrade hellostakateruiapp ./helm-repo` to update application version


