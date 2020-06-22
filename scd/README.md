# Smart Campus Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## The Overall Flow
When a user clicks the "Line Chart" tab, the frontend calls the getReadings() method from the ReadingService service, which sends a GET request to the backend API (/api/).

When there's a GET request to /api/, node/express is configured to:
1. Connect to MongoDB
2. Run a query
3. Return the JSON-parsed results to whoever initiated the GET request
4. Disconnect from the database

So, ReadingService receives the JSON response (since it initiated the GET request) and *deserializes* (see below) it using the the Reading object model.
> Note: This step just assigns the attributes of an instance of the Reading class to the corresponding fields in the JSON object, i.e. {"temp":23} -> \<\<Reading instance\>\>.temp = 23.

After deserializing the response, ReadingService sends the list of Readings (an array of Reading objects) to the frontend. Once the frontend receives the sensor readings, the ChartJS fields are populated and the chart is displayed.

## Running Locally
You must be on Tech's network, since the MongoDB used to populate the charts is hosted on TechXplore.

The two prerequisites are having the latest version of [Node.JS](https://phoenixnap.com/kb/update-node-js-version) and installing the angular-cli. You have 2 options of install angular-cli:
* Using npm: `npm install -g @angular/cli`
* Using brew: `brew install angular-cli`

Now, after cloning/pullinh this repository, in your terminal, `cd` inside of the "scd" folder. Run `ng build` - this compiles the project and installs all the needed dependencies (which are listed in the package.json file).

Now that the project has been compiled successfully and all dependencies are satisfied, run `node server` - this starts the Node.js/Express backend using the "server.js" file.

The app should now be hosted on your [local machine on port 3000](http://localhost:3000).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

