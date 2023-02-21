# Deploy your SPA - IN A LIGHT MODULE

(This README is for the special case of deploying a SPA in a light module. For most purposes hosting a SPA on it's own server is a best practice, and provides a better development experience. This is described in the main [README](README.md) file.)

(This method of deployment ***in this demo project*** is not actively maintained.)

Build and deploy the SPA to make it available for editing.

### React

Go to `/spa/react-minimal` on the terminal and run `npm install`, and then `npm run deploy:mgnl`.

***You may need to change the `deploy:mgnl` script according to your file structure.***

Once built, check that the app is deployed to `magnolia/light-modules/react-minimal-lm/webresources/build`.

See the `.env` files for important configurations.

In `/magnolia/react-minimal-lm/templates/pages/basic.yaml` and `/contact.yaml`, comment out the `baseUrl` and `routeTemplate` lines, and comment ***in*** the `templateScript` line.


### Angular

Go to `/spa/angular-minimal` on the terminal and run `npm install`, and then `ng build --prod`.
(If you forget the '--prod', the paths to the js and css in the created index.html will be incorrect.)

Once built, check that the app is deployed to `magnolia/light-modules/angular-minimal-lm/webresources/build`.

See the files in `/src/environments` for important configurations.

In `/magnolia/angular-minimal-lm/templates/pages/basic.yaml` and `/contact.yaml`, comment out the `baseUrl` and `routeTemplate` lines, and comment ***in*** the `templateScript` line.


### Vue

Go to `/spa/vue-minimal` on the terminal and run `npm install`, and then `npm run deploy:mgnl`.

Once built, check that the app is deployed to `magnolia/light-modules/vue-minimal-lm/webresources/dist`.

See the `.env` files for important configurations.

In `/magnolia/vue-minimal-lm/templates/pages/basic.yaml` and `/contact.yaml`, comment out the `baseUrl` and `routeTemplate` lines, and comment ***in*** the `templateScript` line.
