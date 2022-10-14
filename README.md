# Marvel App
Marvel app is a system to register all the mutants criatures so that goverments can have a list of then and call them in bad times.

## Run the app
1. Clone this repo
`git clone git@github.com:jorgesaavedra97/marvel-app.git`

2. Start your MySQL Service and run these files in your MySQL Server
`marvel-app/server/data/marvel_universe_user.sql`
`marvel-app/server/data/marvel_universe.sql`

3. Intall dependencies and run the dev server
`cd server && npm i && npm run dev`

4. Create the .env file in the marvel-app/server folder with the correct credential values
```
HOST=localhost
DATABASE=marvel_universe
DB_USER=marvel_universe_user
PASSWORD=vcUCIS8377@r
```

5. Test the REST Services using the `marvel-app/HEROES.postman_collection.json` colection


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
